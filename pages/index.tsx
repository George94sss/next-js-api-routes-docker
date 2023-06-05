import {
  faPhone,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faGamepad,
  faMicrophone,
  faBook,
  faCutlery,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Title from "../components/Title";
import List from "../components/List";
import ContactItem, { listItemType } from "../components/ListItems/ContactItem";
import EducationItem, {
  educationItemType,
} from "../components/ListItems/EducationItem";
import LanguageItem, {
  languageItemType,
} from "../components/ListItems/LanguageItem";
import Skill, { skillType } from "../components/ListItems/SkillItem";
import InterestItem, {
  interestItemType,
} from "../components/ListItems/InterestItem";
import ExperienceItem, {
  experienceItemType,
} from "../components/ListItems/ExperienceItem";

const arrContact: listItemType[] = [
  { text: "+7 980 446 04 63", icon: faPhone, id: "1" },
  { text: "+7 980 446 04 63", icon: faEnvelope, id: "2" },
  { text: "+7 980 446 04 63", icon: faGlobe, id: "3" },
  { text: "+7 980 446 04 63", icon: faLinkedinIn, id: "4" },
  { text: "+7 980 446 04 63", icon: faLocationDot, id: "5" },
];

const arrEducation: educationItemType[] = [
  {
    title: " Master Degree in Computer Science",
    text: "Uneversity Name",
    id: "1",
  },
  {
    title: "Bachelor Degree in Computer Science",
    text: "Uneversity Name",
    id: "2",
  },
  { title: "Matriculation", text: "Uneversity Name", id: "3" },
];

const arrLanguage: languageItemType[] = [
  {
    title: "English",
    prosent: 90,
    id: "1",
  },
  {
    title: "English",
    prosent: 48,
    id: "2",
  },
  { title: "English", prosent: 85, id: "3" },
];

const arrSkills: skillType[] = [];

for (let i = 0; i < 4; i++) {
  arrSkills.push({
    title: "HTML",
    prosent: (i + 1) * 16,
    id: `${i}`,
  });
}

const arrInterests: interestItemType[] = [
  { text: "Gaming", icon: faGamepad, id: "1" },
  { text: "Singing", icon: faMicrophone, id: "2" },
  { text: "Reading", icon: faBook, id: "3" },
  { text: "Cooking", icon: faCutlery, id: "4" },
];

const arrExperience: experienceItemType[] = [
  {
    title_1: "2019 - Present",
    title_2: "Company Name",
    title_3: "Senior UX Designer",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Tempore repudiandae beatae magni quibusdam minus laboriosamtotam deleniti, repellat, nisi obcaecati!",
    id: "1",
  },
  {
    title_1: "2019 - Present",
    title_2: "Company Name",
    title_3: "Senior UX Designer",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Tempore repudiandae beatae magni quibusdam minus laboriosamtotam deleniti, repellat, nisi obcaecati!",
    id: "2",
  },
  {
    title_1: "2019 - Present",
    title_2: "Company Name",
    title_3: "Senior UX Designer",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Tempore repudiandae beatae magni quibusdam minus laboriosamtotam deleniti, repellat, nisi obcaecati!",
    id: "3",
  },
  {
    title_1: "2019 - Present",
    title_2: "Company Name",
    title_3: "Senior UX Designer",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Tempore repudiandae beatae magni quibusdam minus laboriosamtotam deleniti, repellat, nisi obcaecati!",
    id: "4",
  },
];

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: { data: arrSkills },
//   };
// };

// const arrSkills: skillType[] = [
//   {
//     title: "HTML",
//     prosent: `w-[${prosent}%]`,
//     id: "1",
//   },
//   {
//     title: "CSS",
//     prosent: `w-[${prosent}%]`,
//     id: "2",
//   },
//   {
//     title: "JSS",
//     prosent: `w-[${prosent}%]`,
//     id: "3",
//   },
//   {
//     title: "TS",
//     prosent: 14,
//     id: "4",
//   },
// ];

// export default arrSkills

const Index = () => (
  <div className="bg-[#ADD8E6] flex justify-center items-center min-h-[100vh]">
    <div className="relative w-[100%] max-w-[1000px] min-h-[1000px] bg-[#fff] m-[50px] grid grid-cols-3 shadow-[0 35px 55px rgba(0, 0, 0, 0.1)]">
      {/* Left Side */}
      <div className="relative bg-[#003347] p-[40px] col-span-1">
        {/* profileText */}
        <div className="relative flex flex-col items-center p-[20px] border-b-[1px solid rgba(255, 255, 255, 0.2)]">
          <div className="w-[200px] h-[200px] bg-gray-600 relative rounded-[50%] overflow-hidden">
            <img
              className="absolute top-0 left-0 w-[100%] h-[100%] object-cover"
              src="/static/cat.jpg"
              alt=""
            />
          </div>
          <h2 className="text-[#fff] text-[1.5rem] mt-[20px] uppercase text-center font-[600] leading-[1.4rem]">
            GGarnett <br />
            <span className="text-[1rem] font-[300]">Web developer</span>
          </h2>
        </div>
        {/* contactInfo */}
        <div className="pt-[40px]">
          <Title title={{ text: "Contact Info", flag: true }} />
          <List>
            {arrContact.map((item) => {
              return <ContactItem listItem={item} />;
            })}
          </List>
        </div>
        {/* contactInfo education */}
        <div className="pt-[40px]">
          <Title title={{ text: "Education", flag: true }} />
          <List>
            {arrEducation.map((item) => {
              return <EducationItem listItem={item} />;
            })}
          </List>
        </div>
        {/* contactInfo language */}
        <div className="pt-[40px] ">
          <Title title={{ text: "Languages", flag: true }} />
          <List>
            {arrLanguage.map((item) => {
              return <LanguageItem listItem={item} />;
            })}
          </List>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative bg-[#fff] p-[40px] col-span-2">
        <div className="mb-[50px]">
          <Title title={{ text: "Profile", flag: false }} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dolores, necessitatibus aliquam natus officia deleniti quam
            adipisci! Tempora vero temporibus odio hic. Dolorum magni tenetur
            omnis, ex perspiciatis molestiae nobis?
          </p>
        </div>

        {/* experience skills */}
        <div className="mb-[50px]">
          <Title title={{ text: "Experiance", flag: false }} />
          {arrExperience.map((item) => {
            return <ExperienceItem listItem={item} />;
          })}
        </div>

        {/* about skills */}
        <div className="mb-[50px]">
          <Title title={{ text: "Profesioanl skils", flag: false }} />
          {arrSkills.map((item) => {
            return <Skill listItem={item} />;
          })}
        </div>

        {/* about interest */}
        <div className="mb-[50px] ">
          <Title title={{ text: "Intersets", flag: false }} />
          <ul className="grid grid-cols-4">
            {arrInterests.map((item) => {
              return <InterestItem listItem={item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
