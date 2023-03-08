async function getUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (e) {
    throw Error(e);
  }
}
getUsers();

enum Gender {
  Male = "male",
  Female = "female",
}

interface UsersCountInfo {
  total: number;
  skip: number;
  limit: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  hair?: {
    color?: string;
    type?: string;
  };
  domain: string;
  ip: string;
  addressHome: {
    address: string;
    city: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
  addressCompany: AdressCompany;
}

interface AdressCompany {
  address: string;
  city: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  state: string;
  department: string;
  name: string;
  title: string;
}
