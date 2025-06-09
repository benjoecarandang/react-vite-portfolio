import { useParams } from "react-router-dom";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Case Study Detail for ID: {id} (Coming Soon)</div>;
};

export default CaseStudyDetail;
