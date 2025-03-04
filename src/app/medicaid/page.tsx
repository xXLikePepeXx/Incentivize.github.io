import React from "react";
import ContentTemplate from "../Components/ContentTemplate";

const Page: React.FC = () => {
  const title = <h1 className="">Medicaid</h1>;

  const subtitle = (
    <p className="">
      Partnering with plans to revolutionize Medicaid, fostering a culture of health and driving quality improvements through purposeful incentives.
    </p>
  );

  const body = (
    <div className="space-y-6 text-gray-800">
      <p>
        <strong>It starts with a culture of health:</strong> We believe that healthcare incentives should go beyond monetary value; they should provide meaningful improvements in health outcomes. Our platform facilitates active participation, nurturing a culture of health and wellness within the Medicaid population. Going beyond helping members manage their condition, our tools help you align with Medicaid's Quality Incentives, demonstrating our commitment to delivering quality, value-driven care.
      </p>

      <p>
        <strong>Motivate members and simplify for Medicaid’s Quality Incentives and Value-Added Benefits:</strong> Our healthcare engagement platform takes a fresh approach to Medicaid Quality Incentives and Value-Added Benefits. Leveraging the power of our data consolidation tools, we help you customize benefit programs to meet the unique needs of Medicaid beneficiaries.
      </p>

      <p>
        <strong>Design, configure, and run comprehensive programs for your members:</strong> Our platform allows you to incorporate medical history, health behaviors, and social determinants of health to design personalized health journeys for each member. Use our tools to recognize the actions members take in their journey to improve their health—offering rewards for attending regular check-ups, maintaining medication schedules, and achieving personal health goals. Configure and deploy journeys and incentive benefits for your populations in weeks, not months.
      </p>

      <p>
        <strong>Meet your members at the highest points for motivation and need:</strong> Plug our engagement rules into your existing member touch points and use our preference detection tools to engage individuals in the moments and channels with the highest success rates through your touch points.
      </p>

      <p>
        <strong>Focus more on engagement and outcomes and less on data management:</strong> Our platform consolidates multiple data sources and simplifies the implementation of Medicaid Quality Incentives and Value-Added Benefits by allowing you to focus on experience design, member engagement, and quality outcomes.
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