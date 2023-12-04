export interface UniversitiesSchema {
	universities: University[];
	slicedUniversities: University[];
	activePage: number;
	totalPages: number;
	isLoading: boolean;
}

export interface University {
	alpha_two_code: string;
	country: string;
	domains: string[];
	name: string;
	web_pages: string[];
}
