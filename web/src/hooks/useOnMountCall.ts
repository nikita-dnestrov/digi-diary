import { useEffect, useState } from 'react';

export const useOnMountCall = (callFn: any) => {
	const [callData, setCallData] = useState<any>(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		(async () => {
			setIsLoading(true);
			setCallData(await callFn());
			setIsLoading(false);
		})();
	}, []);

	return { data: callData, isLoading };
};
