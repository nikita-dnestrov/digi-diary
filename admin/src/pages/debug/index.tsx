import { Tabs } from "../../components";

export default function DebugPage({}) {
  const tabData = { Users: <div>users</div>, Test: <div>test</div> };
  return (
    <div>
      <Tabs data={tabData} />
      <div className=""></div>
    </div>
  );
}
