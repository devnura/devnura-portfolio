import SectionParagraph from "./SectionParagraph";
import SectionTittle from "./SectionTittle";
import SkillCard from "./SkillCard";

export default function SectionSkills() {
    return (
        <section className="py-28 bg-colors-skill">
        <div className='container mx-auto'>
            <SectionTittle>Skills</SectionTittle>
            <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
            <div className="flex -mx-2 mt-20 flex-wrap">
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard name="JavaScript" level="Lanjutan" image="img/javascript.svg" imageClassName="h-16 w-16 rounded-lg"/>
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard name="React" level="Menegah" image="img/react.svg" imageClassName="h-16 w-16"/>
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard name="Node JS" level="Menegah" image="img/nodejs.svg" imageClassName="h-16 w-16"/>
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard name="Laravel" level="Menengah" image="img/laravel.svg" imageClassName="h-16 w-16"/>
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard name="Exrpess JS" level="Menegah" image="img/express.svg" imageClassName="h-16 w-16"/>
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard name="PHP" level="Menegah" image="img/php.svg" imageClassName="h-16 w-16"/>
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard name="Postgresql" level="Menegah" image="img/postgresql.svg" imageClassName="h-16 w-16"/>
                </div>
            </div>
        </div>
      </section>
    )
}