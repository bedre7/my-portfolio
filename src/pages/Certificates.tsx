import React from "react";
import Header from "../components/Header";
import CertificateItem from "../components/Certificate/CertificateItem";
import a2svCertificate from "../assets/img/A2SV-Hackathon.jpg";
import problemSolvingCertificate from "../assets/img/HackerRank-problem-solving.png";
import OBSSCodeMasterCertificate from "../assets/img/OBSS-Code-Master.jpg";

const Certificates = () => {
  return (
    <div className="max-h-[94vh] flex-1 overflow-y-scroll px-5 pb-32 pt-10 md:px-20">
      <Header>Certificates</Header>
      <div className="mt-12 flex flex-col space-y-10">
        <CertificateItem
          title="Top 10 Finalist of A2SV Hacks-Internal Hackathon 2023"
          description="Collaborated with two team members to develop an innovative internship application platform which provided a centralized solution for university students, enabling them to apply for internships and effortlessly track the status of their applications, all within a single platform."
          date="May 2023"
          image={a2svCertificate}
          logo="https://media.licdn.com/dms/image/C560BAQGaqgPXc3W6VA/company-logo_200_200/0/1613665405693?e=2147483647&v=beta&t=RfkKzp1dV_s1UzG9qGEMQlhsbajpBqWb1KFdGikbwHQ"
          link="https://github.com/internship-platform/internship-portal"
          issuedBy="A2SV | Africa to Silicon Valley"
        />
        <CertificateItem
          title="Problem Solving (Basic) Certificate"
          description="This certification demonstrates one's ability to solve problems related to programming."
          date="June 2022"
          image={problemSolvingCertificate}
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png"
          link="https://www.hackerrank.com/certificates/40e930289f28"
          issuedBy="HackerRank"
        />
        <CertificateItem
          title="OBSS CodeMaster 2023"
          description="A 4-hour long programming contest organized by OBSS which consisted of problems assessing the participants' knowledge of data structures and algorithms, research skills, and problem solving related to real-life business applications. I ranked 2nd from my univesity."
          date="October 2023"
          image={OBSSCodeMasterCertificate}
          logo="data:image/jpeg;base64,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"
          link="https://drive.google.com/file/d/1SBeqGwHSqFb62_R8LvyA4qs3WLI3gerL/view?usp=drive_link"
          issuedBy="OBSS"
        />
      </div>
    </div>
  );
};

export default Certificates;
