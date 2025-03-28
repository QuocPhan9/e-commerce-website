import { assets } from "../../assets/frontend_assets/assets"
import { NewsletterBox, Title } from "../../components"

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={"ABOUT"} text2={"US"}/>
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-[450px]" src={assets.about_img} alt=""/>
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis cupiditate delectus numquam molestias ipsam deserunt iste veritatis dolor temporibus, ut, facere quibusdam, laborum id nobis debitis voluptate! Architecto, ex.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores commodi beatae eligendi nobis harum. Quas cum aut perspiciatis quae sunt fugiat! Aut id molestiae alias inventore culpa magni. Velit.</p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsa nesciunt tenetur optio rem voluptas? Quaerat aperiam, ducimus in saepe repudiandae reprehenderit ex dolorum ea? Autem minus aspernatur numquam mollitia?e</p>
                </div>  
            </div>

            <div className="text-xl py-4">
                <Title text1={"WHY"} text2={"CHOOSE US"}/>
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quantity Assurance:</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestias aperiam est mollitia dolorem ex fugiat cupiditate nostrum amet quam eius corrupti veritatis, modi laborum quis blanditiis voluptatem. Minima, asperiores?</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestias aperiam est mollitia dolorem ex fugiat cupiditate nostrum amet quam eius corrupti veritatis, modi laborum quis blanditiis voluptatem. Minima, asperiores?</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestias aperiam est mollitia dolorem ex fugiat cupiditate nostrum amet quam eius corrupti veritatis, modi laborum quis blanditiis voluptatem. Minima, asperiores?</p>
                </div>
            </div>
            <NewsletterBox/>
        </div>
    )
}

export default About
