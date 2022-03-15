import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTittle from "./SectionTittle";

export default function SectionProjects() {
    return (
        <section className="py-28">
            <div className="container mx-auto">
                <SectionTittle>Projects</SectionTittle>
                <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>
                <div className="flex -mx-2 mt-20 flex-wrap">
                    <div className="w-6/12 px-4 pb-10">
                       <ProjectItem 
                        name="Hasten"
                        description="Explorasi landing page"
                        image="img/resources.png"
                       />
                    </div>
                    <div className="w-6/12 px-4 pb-10">
                       <ProjectItem 
                        name="Resources"
                        description="Explorasi landing page"
                        image="img/resources.png"
                       />
                    </div>
                    <div className="w-6/12 px-4 pb-10">
                       <ProjectItem 
                        name="Hasten"
                        description="Explorasi landing page"
                        image="img/resources.png"
                       />
                    </div>
                    <div className="w-6/12 px-4 pb-10">
                       <ProjectItem 
                        name="Resources"
                        description="Explorasi landing page"
                        image="img/resources.png"
                       />
                    </div>
                </div>
            </div>
        </section>
    )
}