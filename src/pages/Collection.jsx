import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets} from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

      const { products, search , showSearch } = useContext(ShopContext);
      const [showFilter, setShowFilter] = useState(false)
      const [filterProduct, setFilterProduct] = useState([])
      const [category, setCategory] = useState([])
      const [subCategory, setSubCategory] = useState([])
      const [sortType, setSortType] = useState('relavent')

      const toggleCategory = (e)=>{
        if(category.includes(e.target.value)){
           setCategory(prev => prev.filter(item=>item !==e.target.value))
        }else{
          setCategory(prev =>[...prev, e.target.value])
        }
      }
      const toggleSubCategory = (e)=>{
        if(subCategory.includes(e.target.value)){
           setSubCategory(prev => prev.filter(item=>item !==e.target.value))
        }else{
          setSubCategory(prev =>[...prev, e.target.value])
        }
      }

      const applyFilter =  useCallback(() => {
        let productCopy = products.slice();

        if (showSearch && search) {
          productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(category.length > 0){
          productCopy = productCopy.filter((item)=> category.includes(item.category))
        }
        if(subCategory.length > 0){
          productCopy = productCopy.filter((item)=> subCategory.includes(item.subCategory))
        }
        setFilterProduct(productCopy)
      }, [category, subCategory, products, search, showSearch])

       
        const sortProduct = useCallback(() => {
          let fpCopy = filterProduct.slice()
          switch (sortType) {
            case 'low-high':
              setFilterProduct([...fpCopy].sort((a, b) => a.price - b.price))
              break;
            case 'high-low':
              setFilterProduct([...fpCopy].sort((a, b) => b.price - a.price))
              break;
          
            default:
              applyFilter()
              break;
          }
        },[sortType])

useEffect(() => {
   applyFilter();
}, [applyFilter]);

useEffect(() => {
   sortProduct();
}, [sortProduct]);
      
  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300'>
      
      {/* filter optoins */}
      
      <div className='min-w-40'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} alt="" />
        </p>
        {/* category filter  */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>

        {/* Subcategory Filter  */}

           <div className={`border border-gray-400 pl-5 py-3 my-5 ${showFilter ?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* {right side } */}
      <div className="flex-1">
        <div className="flex justify-between flex-col md:flex-row text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* product sort  */}
          <select className='border-2 border-gray-300 text-sm px-2 max-w-40 py-2' onChange={(e) => setSortType(e.target.value)}>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* map product  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
           {
            filterProduct.map((item, index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
