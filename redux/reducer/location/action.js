import axios from "axios";

const getCountry = () => axios.get(process.env.NEXT_PUBLIC_API_URL + '/v1/user/location/country');
export const getAllCountry = async () => {
    const country = await getCountry();
    return country.data.data;
}
export const getAllCountryOption = async () => {
    const country = await getCountry();
    const data = [];
    country.data.data.map(v => data.push({id:v.id_country, value: v.id, text: v.country_name}));
    return data;
}

const getProvince = () => axios.get(process.env.NEXT_PUBLIC_API_URL + '/v1/user/location/province');
export const getAllProvince = async () => {
    const province = await getProvince();
    return province.data.data;
}
export const getAllProvinceOption = async () => {
    const province = await getProvince();
    const data = [];
    province.data.data.map(v => data.push({value: v.id_province, text: v.province_name}));
    return data;
}

const getCity = (id_province) => axios.get(process.env.NEXT_PUBLIC_API_URL + '/v1/user/location/city' + (id_province && `?id_province=${id_province}`));
export const getAllCity = async (id_province) => {
    const city = await getCity(id_province);
    return city.data.data;
}
export const getAllCityOption = async (id_province) => {
    const city = await getCity(id_province);
    const data = [];
    city.data.data.map(v => data.push({value: v.id_city, text: v.city_name}));
    return data;
}
