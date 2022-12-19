import { Tab } from "@headlessui/react";
import clsx from "clsx";

interface Props {
  data: { [key: string]: JSX.Element };
}
export function Tabs({ data }: Props) {
  const styles = {
    tab: (state: boolean) => clsx("p-3 mx-2", { "bg-green-400": state }),
  };

  const tabNames = Object.keys(data);
  const tabContent = Object.values(data);

  return (
    <Tab.Group>
      <Tab.List>
        {tabNames.map((el) => (
          <Tab className={({ selected }) => styles.tab(selected)}>{el}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabContent.map((el) => (
          <Tab.Panel>{el}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
