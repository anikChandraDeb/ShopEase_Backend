const {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListByKeywordService,
    ListByRemarkService,
    ListBySimilerService,
    DetailsService,
    ReviewListService
}=require('../services/ProductServices');


exports.BrandList=async(req,res)=>{
    let result=await BrandListService();
    return res.status(200).json(result);
}

exports.CategoryList=async(req,res)=>{
    let result=await CategoryListService();
    return res.status(200).json(result);
}

exports.ProductSliderList=async(req,res)=>{
    let result=await SliderListService();
    return res.status(200).json(result);
}

exports.ProductListByBrand=async(req,res)=>{
    let result=await ListByBrandService(req);
    return res.status(200).json(result);
}

exports.ProductListByCategory=async(req,res)=>{
    let result=await ListByCategoryService(req);
    return res.status(200).json(result);
}

exports.ProductListBySimiler=async(req,res)=>{
    
}

exports.ProductListByKeyword=async(req,res)=>{
    
}

exports.ProductListByRemark=async(req,res)=>{
    let result=await ListByRemarkService(req);
    return res.status(200).json(result);
}

exports.ProductDetails=async(req,res)=>{
    
}

exports.ProductReviewList=async(req,res)=>{
    
}
