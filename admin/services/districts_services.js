import districtRepository from '../repositories/districts_repositories.js';

export const fetchAll = async () => {
  const districts = await districtRepository.findAll();
  return districts.map(district => district.toJSON());
};
