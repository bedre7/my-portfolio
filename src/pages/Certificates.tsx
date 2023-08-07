import React from "react";
import Header from "../components/Header";
import CertificateItem from "../components/Certificate/CertificateItem";
import a2svCertificate from "../assets/img/A2SV-Hackathon.jpg";
import problemSolvingCertificate from "../assets/img/HackerRank-problem-solving.png";

const Certificates = () => {
  return (
    <div className="max-h-[94vh] flex-1 overflow-y-scroll px-20 pb-32 pt-10">
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
          description="This certification demonstrates that you have the basic skills needed to solve problems with code."
          date="June 2022"
          image={problemSolvingCertificate}
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png"
          link="https://www.hackerrank.com/certificates/40e930289f28"
          issuedBy="HackerRank"
        />
      </div>
    </div>
  );
};

export default Certificates;
