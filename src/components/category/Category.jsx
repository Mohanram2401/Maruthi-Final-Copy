import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://eu-images.contentstack.com/v3/assets/blta023acee29658dfc/blta9f158c45627aa62/651dbb742365a678d7ec7f18/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg?disable=upscale&width=1200&height=630&fit=crop',
        name: 'Beverages'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/4de2aaf9-8151-4582-a53f-11f99c0656f1-7.jpg',
        name: 'Snacks'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/68aebc4c-9b70-4846-8ab3-20a8f392327c-5(2).jpg',
        name: 'Ready to Cook'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/b68437c2-4995-43bd-8b1d-223068007414-6(2).jpg',
        name: 'Ready to Eat'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/81510193-e214-493e-8c74-111c96d8988e-9.jpg',
        name: 'Household Essentials'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/69ae604e-9916-4f94-ba47-85db5f0ffeb8-10.jpg',
        name: 'Cleaning Needs'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/e2952341-3cac-4107-8142-80afc9f5c4cc-2.jpg',
        name: 'Oral Care'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/24508d0b-ef7a-4139-b664-9dc24970d1ad-1.jpg',
        name: 'Skin Care'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/5bb32852-8ccf-44f1-8fcf-235db9a4a997-12.jpg',
        name:'Health Care'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/66588801-343c-4fd1-a6b8-dbcfa2dd66e4-13.jpg',
        name:'Personal Care'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/583aad05-ccf5-4bfb-bf08-5839d6e58594-4.jpg',
        name:'Creams & Lotions'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/e8722d1d-6c26-42ba-b6b5-0519a87d0236-3.jpg',
        name:'Mens Grooming'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/4f81f8b0-2484-41b6-ae95-30045ae09902-11.jpg',
        name:'Feminine Care'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/02382cc1-f86f-4f8e-9deb-fabfecfa3160-15.jpg',
        name:'Stationery'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/c01eb0bf-1bd9-46cb-a621-d91e4cbe6390-8.jpg',
        name:'Baby Care'
    },
    {
        image: 'https://d1sl07a7h3d3fr.cloudfront.net/admin/category/40cfde23-4382-47d7-a2cc-28dccb46a6e9-16.jpg',
        name:'Staples'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-8">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-green-10 transition-all cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;