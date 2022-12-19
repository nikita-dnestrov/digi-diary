import { Disclosure } from "@headlessui/react";

export function ListDisclosure({ title, children }) {
	return (
		<Disclosure>
			<Disclosure.Button className="py-2 w-full flex justify-start items-start">
				{title}
			</Disclosure.Button>
			<Disclosure.Panel className="text-gray-500">{children}</Disclosure.Panel>
		</Disclosure>
	);
}
