import { useCallback } from "react";
import { IResponseData, ISector } from "../types";
import { api } from "../constants";

function useAddNewEntry() {
	const addNewEntry = useCallback(
		async (payload: ISector): Promise<ISector | null> => {
			try {
				const url = `${process.env.VITE_BASE_URL}/api/`;
				const {
					status,
					data: { message, data },
				}: { status: number; data: IResponseData<ISector> } = await api().post(
					url,
					payload,
					undefined
				);
				if (status !== 201) throw new Error(message ?? "");
				return data ?? null;
			} catch (error) {
				return null;
			}
		},
		[]
	);

	return { addNewEntry };
}

export default useAddNewEntry;
