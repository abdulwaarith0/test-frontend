import { useCallback, useEffect, useState } from "react";
import { IResponseData, ISector } from "../types";
import { api } from "../constants";

interface IProps {
	id: string;
}

function useGetEntryById({ id }: IProps) {
	const [entry, setEntry] = useState<ISector | null>(null);

	const getEntryById = useCallback(async (): Promise<void> => {
		try {
			const url = `${process.env.VITE_BASE_URL}/api/${id}`;
			const {
				status,
				data: { message, data },
			}: { status: number; data: IResponseData<ISector> } = await api().get(
				url,
				undefined
			);
			if (status !== 200) throw new Error(message ?? "");
			setEntry(data ?? null);
		} catch (error) {
			return;
		}
	}, [id]);

	useEffect(() => {
		getEntryById();
	}, [getEntryById]);

	return entry;
}

export default useGetEntryById;
