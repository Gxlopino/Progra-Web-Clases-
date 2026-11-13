import semesterRepository from '../repositories/semesters_repositories.js';

export const fetchAll = async () => {
  const semesters = await semesterRepository.findAll();
  return semesters.map(semester => semester.toJSON());
};
