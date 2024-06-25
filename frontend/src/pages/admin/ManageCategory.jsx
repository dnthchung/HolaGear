import React from "react";
import TableCategory from "@/components/admin/TableCategory";

const productsData = [
  {
    name: "Men Grey Hoodie",
    brandId: 1,
    imageUrl: "https://cf.shopee.vn/file/2a4f82caa336f18c42447958f25c88cf",
  },
  {
    name: "Women Striped T-Shirt",
    brandId: 2,
    imageUrl: "https://mochanstore.com/wp-content/uploads/2023/08/mochanstore.com-AO-HOOODIE-NAM-NU-FORM-RONG-VAI-NI-BONG-IN-HINH-DAU-LAU-TP85-PHUONG-STORE.jpg",
  },
  {
    name: "Women White T-Shirt",
    brandId: 3,
    imageUrl: "https://product.hstatic.net/200000521439/product/1692802006_h_23_4_look_042_e09_gh.jpg_5e7adfb8cbde4ff4847cec4cbe08052c.jpg",
  },
  {
    name: "Men White T-Shirt",
    brandId: 4,
    imageUrl: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/tsn231431_12.jpg",
  },
  {
    name: "Men White T-Shirt",
    brandId: 5,
    imageUrl: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/tsn231431_12.jpg",
  },
  {
    name: "Men White T-Shirt",
    brandId: 6,
    imageUrl: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/tsn231431_12.jpg",
  },
  {
    name: "Men White T-Shirt",
    brandId: 7,
    imageUrl: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/tsn231431_12.jpg",
  },
  {
    name: "Men White T-Shirt",
    brandId: 8,
    imageUrl: "https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/t/s/tsn231431_12.jpg",
  },
];
const ManageCategory = () => {
  return (
    <div>
      <TableCategory productsData={productsData} />
    </div>
  );
};

export default ManageCategory;
