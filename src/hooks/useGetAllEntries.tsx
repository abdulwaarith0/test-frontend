import { useCallback, useEffect, useState } from "react";
import { IResponseData, ISector } from "../types";
import { BASE_URL, api } from "../constants";

const useGetAllEntries = () => {
	const [allEntries, setAllEntries] = useState<ISector[]>([]);

	const getAllEntries = useCallback(async (): Promise<void> => {
		try {
			const url = `${BASE_URL}/`;
			const {
				status,
				data: { message, data },
			}: { status: number; data: IResponseData<ISector[]> } = await api().get(
				url,
				undefined
			);
			if (status !== 200) throw new Error(message ?? "");
			setAllEntries(data ?? []);
		} catch (error) {
			return;
		}
	}, []);

	useEffect(() => {
		getAllEntries();
	}, [getAllEntries]);

	return allEntries;
};

export default useGetAllEntries;
