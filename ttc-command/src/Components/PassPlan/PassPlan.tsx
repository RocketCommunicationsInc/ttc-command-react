import { RuxContainer } from "@astrouxds/react";
// import { useTTCGRMContacts } from "@astrouxds/mock-data";
import "./PassPlan.css";

const Constellation = () => {
  // const { dataById: contacts, dataIds: contactIds } = useTTCGRMContacts();

  return (
    <>
      <RuxContainer className="pass-plan">
        <div slot="header" className="header">
          IRON 4090 PASS PLAN
        </div>
      </RuxContainer>
    </>
  );
};

export default Constellation;
