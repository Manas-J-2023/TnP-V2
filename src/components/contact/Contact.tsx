import React from 'react'
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Twitter, Linkedin, Users } from "lucide-react";
import ContactSection from '../home/ContactSection';
import TeamSection from '../about/TeamSection';

function Contact() {
    return(
        <section>
          <TeamSection/>
          <ContactSection/>
        </section>
    
    )
}

export default Contact




