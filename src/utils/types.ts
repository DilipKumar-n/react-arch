type User = {
	address: string;
	company: string;
	country: string;
	email: string;
	id: number;
	name: string;
	phone: string;
	photo: string;
	state: string;
	username: string;
	zip: string;
};

export type BannerProps = {
	data: Array<User>;
};
