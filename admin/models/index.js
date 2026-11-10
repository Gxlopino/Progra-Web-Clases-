// admin/models/index.js
import User from './user.js';
import Profile from './profile.js';
import Student from './students.js';
import Enterprise from './enterprise.js';
import Carrer from './carrer.js';
import Semester from './semester.js';
import District from './district.js';
import Skill from './skill.js';
import SkillLevel from './skill_level.js';
import Experience from './experience.js';
import Link from './link.js';
import Log from './log.js';
import Modality from './modality.js';
import Workday from './workday.js';
import Application from './application.js';
import ApplicationStudent from './application_student.js';
import ApplicationStudentReview from './application_studen_review.js';
import StatusApplicationStudent from './status_application_student.js';
import StudentApplicationSaved from './student_application_saved.js';
import StudentSkillSkillLevel from './student_skill_skil_level.js';
import ApplicationSkill from './application_skill.js';
import ApplicationCarrer from './application_carrer.js';

// ==========================================
// 1. RELACIONES DE PERFIL Y USUARIO
// ==========================================

// User -> Profile (1:1)
User.hasOne(Profile, { foreignKey: 'user_id', as: 'profile' });
Profile.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// User -> Student (1:1)
User.hasOne(Student, { foreignKey: 'user_id', as: 'student' });
Student.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// User -> Enterprises (1:N)
User.hasMany(Enterprise, { foreignKey: 'user_id', as: 'enterprises' });
Enterprise.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// User -> Logs (1:N)
User.hasMany(Log, { foreignKey: 'user_id', as: 'logs' });
Log.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// ==========================================
// 2. RELACIONES DEL ESTUDIANTE
// ==========================================

// Carrer -> Students (1:N)
Carrer.hasMany(Student, { foreignKey: 'carrere_id', as: 'students' });
Student.belongsTo(Carrer, { foreignKey: 'carrere_id', as: 'carrers' });

// Semester -> Students (1:N)
Semester.hasMany(Student, { foreignKey: 'sementer_id', as: 'students' });
Student.belongsTo(Semester, { foreignKey: 'sementer_id', as: 'semester' });

// District -> Students (1:N)
District.hasMany(Student, { foreignKey: 'district_id', as: 'students' });
Student.belongsTo(District, { foreignKey: 'district_id', as: 'district' });

// Student -> Experiences (1:N)
Student.hasMany(Experience, { foreignKey: 'student_id', as: 'experiences' });
Experience.belongsTo(Student, { foreignKey: 'student_id', as: 'student' });

// Student -> Links (1:N)
Student.hasMany(Link, { foreignKey: 'student_id', as: 'links' });
Link.belongsTo(Student, { foreignKey: 'student_id', as: 'student' });

// ==========================================
// 3. RELACIONES DE HABILIDADES DE ESTUDIANTES
// ==========================================

// Student -> StudentSkillSkillLevel (1:N)
Student.hasMany(StudentSkillSkillLevel, { foreignKey: 'student_id', as: 'student_skills' });
StudentSkillSkillLevel.belongsTo(Student, { foreignKey: 'student_id', as: 'student' });

// Skill -> StudentSkillSkillLevel (1:N)
Skill.hasMany(StudentSkillSkillLevel, { foreignKey: 'skill_id', as: 'student_skills' });
StudentSkillSkillLevel.belongsTo(Skill, { foreignKey: 'skill_id', as: 'skill' });

// SkillLevel -> StudentSkillSkillLevel (1:N)
SkillLevel.hasMany(StudentSkillSkillLevel, { foreignKey: 'skill_level_id', as: 'student_skills' });
StudentSkillSkillLevel.belongsTo(SkillLevel, { foreignKey: 'skill_level_id', as: 'skill_level' });

// Multi-muchos entre Student y Skill pasando por la tabla pivote
Student.belongsToMany(Skill, {
  through: StudentSkillSkillLevel,
  foreignKey: 'student_id',
  otherKey: 'skill_id',
  as: 'skills'
});
Skill.belongsToMany(Student, {
  through: StudentSkillSkillLevel,
  foreignKey: 'skill_id',
  otherKey: 'student_id',
  as: 'students'
});

// ==========================================
// 4. RELACIONES DE EMPRESAS Y OFERTAS (APPLICATIONS)
// ==========================================

// District -> Enterprises (1:N)
District.hasMany(Enterprise, { foreignKey: 'district_id', as: 'enterprises' });
Enterprise.belongsTo(District, { foreignKey: 'district_id', as: 'district' });

// Enterprise -> Applications (1:N)
Enterprise.hasMany(Application, { foreignKey: 'enterprise_id', as: 'applications' });
Application.belongsTo(Enterprise, { foreignKey: 'enterprise_id', as: 'enterprise' });

// Modality -> Applications (1:N)
Modality.hasMany(Application, { foreignKey: 'modality_id', as: 'applications' });
Application.belongsTo(Modality, { foreignKey: 'modality_id', as: 'modality' });

// District -> Applications (1:N)
District.hasMany(Application, { foreignKey: 'district_id', as: 'applications' });
Application.belongsTo(District, { foreignKey: 'district_id', as: 'district' });

// Workday -> Applications (1:N)
Workday.hasMany(Application, { foreignKey: 'workday_id', as: 'applications' });
Application.belongsTo(Workday, { foreignKey: 'workday_id', as: 'workday' });

// Semester -> Applications (1:N)
Semester.hasMany(Application, { foreignKey: 'sementer_id', as: 'applications' });
Application.belongsTo(Semester, { foreignKey: 'sementer_id', as: 'semester' });

// ==========================================
// 5. POSTULACIONES DE ESTUDIANTES (APPLICATION_STUDENTS)
// ==========================================

// Student -> ApplicationStudent (1:N)
Student.hasMany(ApplicationStudent, { foreignKey: 'student_id', as: 'applications_submitted' });
ApplicationStudent.belongsTo(Student, { foreignKey: 'student_id', as: 'student' });

// Application -> ApplicationStudent (1:N)
Application.hasMany(ApplicationStudent, { foreignKey: 'application_id', as: 'applications_received' });
ApplicationStudent.belongsTo(Application, { foreignKey: 'application_id', as: 'application' });

// StatusApplicationStudent -> ApplicationStudent (1:N)
StatusApplicationStudent.hasMany(ApplicationStudent, { foreignKey: 'status_applications_student_id', as: 'applications' });
ApplicationStudent.belongsTo(StatusApplicationStudent, { foreignKey: 'status_applications_student_id', as: 'status' });

// ApplicationStudent -> ApplicationStudentReview (1:N)
ApplicationStudent.hasMany(ApplicationStudentReview, { foreignKey: 'applications_student_id', as: 'reviews' });
ApplicationStudentReview.belongsTo(ApplicationStudent, { foreignKey: 'applications_student_id', as: 'application_student' });

// Relación N:M directa entre Student y Application (Postulaciones)
Student.belongsToMany(Application, {
  through: ApplicationStudent,
  foreignKey: 'student_id',
  otherKey: 'application_id',
  as: 'applied_applications'
});
Application.belongsToMany(Student, {
  through: ApplicationStudent,
  foreignKey: 'application_id',
  otherKey: 'student_id',
  as: 'applicant_students'
});

// ==========================================
// 6. OFERTAS GUARDADAS POR ESTUDIANTES
// ==========================================

// Student -> StudentApplicationSaved (1:N)
Student.hasMany(StudentApplicationSaved, { foreignKey: 'student_id', as: 'saved_applications_records' });
StudentApplicationSaved.belongsTo(Student, { foreignKey: 'student_id', as: 'student' });

// Application -> StudentApplicationSaved (1:N)
Application.hasMany(StudentApplicationSaved, { foreignKey: 'application_id', as: 'saved_by_students_records' });
StudentApplicationSaved.belongsTo(Application, { foreignKey: 'application_id', as: 'application' });

// Relación N:M entre Student y Application (Guardados)
Student.belongsToMany(Application, {
  through: StudentApplicationSaved,
  foreignKey: 'student_id',
  otherKey: 'application_id',
  as: 'saved_applications'
});
Application.belongsToMany(Student, {
  through: StudentApplicationSaved,
  foreignKey: 'application_id',
  otherKey: 'student_id',
  as: 'saved_by_students'
});

// ==========================================
// 7. REQUISITOS DE LA OFERTA (SKILLS Y CARRERS)
// ==========================================

// Application <-> Skill (N:M a través de ApplicationSkill)
Application.belongsToMany(Skill, {
  through: ApplicationSkill,
  foreignKey: 'application_id',
  otherKey: 'skill_id',
  as: 'skills'
});
Skill.belongsToMany(Application, {
  through: ApplicationSkill,
  foreignKey: 'skill_id',
  otherKey: 'application_id',
  as: 'applications' 
});

// Application <-> Carrer (N:M a través de ApplicationCarrer)
Application.belongsToMany(Carrer, { 
  through: ApplicationCarrer, 
  foreignKey: 'application_id', 
  otherKey: 'carrer_id', 
  as: 'carrers' 
});
Carrer.belongsToMany(Application, { 
  through: ApplicationCarrer, 
  foreignKey: 'carrer_id', 
  otherKey: 'application_id', 
  as: 'applications' 
});

// Exportar todos los modelos vinculados
export {
  User,
  Profile,
  Student,
  Enterprise,
  Carrer,
  Semester,
  District,
  Skill,
  SkillLevel,
  Experience,
  Link,
  Log,
  Modality,
  Workday,
  Application,
  ApplicationStudent,
  ApplicationStudentReview,
  StatusApplicationStudent,
  StudentApplicationSaved,
  StudentSkillSkillLevel,
  ApplicationSkill,
  ApplicationCarrer,
};