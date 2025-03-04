import React from "react";
import ContentTemplate from "../Components/ContentTemplate";

const Page: React.FC = () => {
  const title = <h1 className="">Partners</h1>;

  const subtitle = (
    <p className="">
      Empowering Collaborative Success: Partnering with Incentivize Health
    </p>
  );

  const body = (
    <div className="space-y-6 text-gray-800">
      <p>
        <strong>Modern benefit plans for a modern workforce:</strong> Our platform brings a revitalized perspective to commercial health plans, emphasizing cost management, quality of care, member acquisition, and retention. Each member has unique needs and healthcare goals; our platform transforms your members’ health data into modern benefits and programs to meet those goals.
      </p>

      <p>
        <strong>Motivate with modern incentives and remove friction from achieving day-to-day wellness:</strong> Our data consolidation platform facilitates the design of highly customized benefit programs to address the needs of a diverse workforce. Our platform lets you focus on engaging members with value-added benefits that not only address their health needs, but also contribute to their overall well-being. Incentivize activities and outcomes while making the best behaviors the easiest behaviors in the moments that matter.
      </p>

      <p>
        <strong>Acquire and retain members with superior benefits:</strong> Acquire and retain members by offering an engaging suite of personalized health programs and incentives. We help commercial health plans keep pace with evolving employer demands for benefits that move the dial, are easy to deploy, and make health engagement seamless for employees.
      </p>

      <p>
        <strong>Cost control without compromising quality:</strong> Our engagement platform is more than just a healthcare incentive tool; it's a comprehensive solution that helps commercial health plans deliver superior, cost-effective care while driving member acquisition and retention. By marrying cost control with quality care, we help commercial health plans achieve their goals and stand out in the competitive employer market.
      </p>
    </div>
  );

  return (
    <div className="">
      <ContentTemplate title={title} subtitle={subtitle} body={body} />
    </div>
  );
};

export default Page;