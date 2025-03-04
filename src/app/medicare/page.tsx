import React from "react";
import ContentTemplate from "../Components/ContentTemplate";

const Page: React.FC = () => {
  const title = <h1 className="">Medicare</h1>;

  const subtitle = (
    <p className="">
      Empowering Medicare plans with transformative solutions, we partner to enhance the member journey through personalized incentives and data-driven engagement
    </p>
  );

  const body = (
    <div className="space-y-6 text-gray-800">
      <p>
        <strong>It starts with a culture of health:</strong> Our platform serves as a comprehensive solution, enabling Medicare Advantage plans to deliver superior, cost-effective care, and drive member acquisition and retention. By harmonizing cost control with quality care, we empower Medicare Advantage plans to stand out in competitive markets, successfully penetrate new states or retirement plans, and deliver enhanced value to their members.
      </p>

      <p>
        <strong>Motivate members and simplify:</strong> Through our sophisticated data consolidation strategy, we design individualized benefit programs that resonate with the Medicare Advantage population. Our platform encourages active participation with incentives and value-added benefits that address their unique health needs, promote wellness, and improve their quality of life.
      </p>

      <p>
        <strong>Aquire and retain members with superior benefits:</strong> Our platform allows you to incorporate medical history, health behaviors, and social determinants of health to design personalized health journeys for each member. Use our tools to recognize the actions members take in their journey to improve their health—offering rewards for attending regular check-ups, maintaining medication schedules, and achieving personal health goals. Configure and deploy journeys and incentive benefits for your populations in weeks, not months.
      </p>

      <p>
        <strong>Meet your members at the highest points for motivation and need:</strong> Plug our engagement rules into your existing member touch points and use our preference detection tools to engage individuals in the moments and channels with the highest success rates through your touch points.
      </p>

      <p>
        <strong>Focus more on engagement and outcomes and less on data management:</strong> Our platform consolidates multiple data sources and simplifies implementation of Medicaid Quality Incentives and Value-Added Benefits by allowing you to focus on experience design, member engagement, and quality outcomes.
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