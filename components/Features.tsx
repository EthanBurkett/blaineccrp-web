import { ScriptProps } from "next/script";
import React from "react";
import {
  BsFillPersonFill,
  BsFillAwardFill,
  BsFillCalendarEventFill,
} from "react-icons/bs";
import { GiFireAxe } from "react-icons/gi";
import { ImAirplane, ImHammer2 } from "react-icons/im";
import { FaCode, FaServer, FaAmbulance } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { RiHandCoinFill, RiLiveFill } from "react-icons/ri";
import { motion } from "framer-motion";

type Props = {};

const Features = (props: ScriptProps) => {
  return (
    <div className="flex flex-col h-[100vh] w-screen relative items-center justify-evenly text-center p-20">
      <motion.h1
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="text-4xl md:text-5xl uppercase tracking-[24px]"
      >
        Features
      </motion.h1>
      <div className="flex snap-none flex-row gap-12 items-center flex-shrink-0 h-[16rem] w-[75vw] md:w-3/4 md:h-[32rem] overflow-x-scroll overflow-y-hidden">
        <Feature
          title="Staff"
          description="
              We have a very large staff team that is on constantly moderating
              the server and discord. We have people from all around the world
              to ensure your roleplay stays amazing.
            "
          icon={<BsFillPersonFill color={"#2D4059"} size={48} />}
        />
        <Feature
          title="Law Enforcement"
          description="
              We have around 80 Law Enforcment Officers to patrol the state of
              San Andreas. There mission is to protect and serve.
            "
          icon={<BsFillAwardFill color={"#2D4059"} size={48} />}
        />
        <Feature
          title="SAFD"
          description="
              We have a very active and well trained fire department. San
              Andreas Fire Department attends both Fire and EMS calls.
            "
          icon={<GiFireAxe color={"#2D4059"} size={48} />}
        />
        <Feature
          title="FAA"
          description="
              Our server has an amazing Federal Aviation Administration. You can
              get certified from basic helicopers to advanced fighter jets.
            "
          icon={<ImAirplane color={"#2D4059"} size={48} />}
        />
        <Feature
          title="Development Team"
          description="
              In addition to our staff team we also have our Development Team.
              This is a small team that includes making and writing scripts to
              making web applications to texturing vehicles and EUP.
            "
          icon={<FaCode color={"#2D4059"} size={48} />}
        />
        <Feature
          title="24/7"
          description="
              We pride ourselves on having little to no down time. Some things
              to come up but we work fast to resolve any and all issues.
            "
          icon={<FaServer color={"#2D4059"} size={48} />}
        />
        <Feature
          title="AntiCheat"
          description="
              We have the best and most effective AntiCheat. We have this to
              ensure good roleplay for all server members.
            "
          icon={<ImHammer2 color={"#2D4059"} size={48} />}
        />
        <Feature
          title="VIP And Donators"
          description="
              We have a very advanced and fast donation program. You can buy VIP
              or donator cars on our
            "
          icon={<MdAttachMoney color={"#2D4059"} size={48} />}
        />
        <Feature
          title="Giveaways"
          description="
              Sometimes we do Discord Nitro or in game VIP giveaways.
            "
          icon={<RiHandCoinFill color={"#2D4059"} size={48} />}
        />
        <Feature
          title="Emergency Vehicles"
          description="
              All of our emergency vehicles are suited to our server, and they
              all work well for our departments.
            "
          icon={<FaAmbulance color={"#2D4059"} size={48} />}
        />
        <Feature
          title="Events"
          description="
              We have events all the time. Such as parties, concerts, races and
              more.
            "
          icon={<BsFillCalendarEventFill color={"#2D4059"} size={48} />}
        />
        <Feature
          title="Streaming And Recording"
          description="
              We love when people stream or record on our server. This is why we
              keep our server as streamer friendly as possible.
            "
          icon={<RiLiveFill color={"#2D4059"} size={48} />}
        />
      </div>
    </div>
  );
};

const Feature = (props: { title: string; description: string; icon: any }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      className="flex flex-col flex-shrink-0 gap-6 justify-center items-center bg-[#2D4059] p-5 md:p-12 rounded-lg w-full md:w-96 h-[14rem] md:h-[28rem] snap-start"
    >
      <div className=" flex justify-center items-center w-24 h-24 bg-[#EEEEEE] rounded-full">
        {props.icon}
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-lg md:text-3xl uppercase tracking-[6px]">
          {props.title}
        </h1>
        <p className="text-sm md:text-lg">{props.description}</p>
      </div>
    </motion.div>
  );
};

export default Features;
