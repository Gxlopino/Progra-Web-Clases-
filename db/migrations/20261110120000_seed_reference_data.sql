-- migrate:up

INSERT INTO districts (name) VALUES
  ('Lima Centro'),
  ('Miraflores'),
  ('San Isidro'),
  ('Surco'),
  ('Callao');

INSERT INTO semesters (name) VALUES
  ('2025-2'),
  ('2026-0'),
  ('2026-1'),
  ('2026-2');

INSERT INTO users (email, password, reset_token, created, updated) VALUES
  ('user1@demo.com', 'password123', NULL, '2025-01-10 08:00:00', '2025-01-10 08:00:00'),
  ('user2@demo.com', 'password123', NULL, '2025-01-10 08:05:00', '2025-01-10 08:05:00'),
  ('user3@demo.com', 'password123', NULL, '2025-01-10 08:10:00', '2025-01-10 08:10:00'),
  ('user4@demo.com', 'password123', NULL, '2025-01-10 08:15:00', '2025-01-10 08:15:00'),
  ('user5@demo.com', 'password123', NULL, '2025-01-10 08:20:00', '2025-01-10 08:20:00'),
  ('user6@demo.com', 'password123', NULL, '2025-01-10 08:25:00', '2025-01-10 08:25:00'),
  ('user7@demo.com', 'password123', NULL, '2025-01-10 08:30:00', '2025-01-10 08:30:00'),
  ('user8@demo.com', 'password123', NULL, '2025-01-10 08:35:00', '2025-01-10 08:35:00'),
  ('user9@demo.com', 'password123', NULL, '2025-01-10 08:40:00', '2025-01-10 08:40:00'),
  ('user10@demo.com', 'password123', NULL, '2025-01-10 08:45:00', '2025-01-10 08:45:00'),
  ('user11@demo.com', 'password123', NULL, '2025-01-10 08:50:00', '2025-01-10 08:50:00'),
  ('user12@demo.com', 'password123', NULL, '2025-01-10 08:55:00', '2025-01-10 08:55:00'),
  ('user13@demo.com', 'password123', NULL, '2025-01-10 09:00:00', '2025-01-10 09:00:00'),
  ('user14@demo.com', 'password123', NULL, '2025-01-10 09:05:00', '2025-01-10 09:05:00'),
  ('user15@demo.com', 'password123', NULL, '2025-01-10 09:10:00', '2025-01-10 09:10:00'),
  ('user16@demo.com', 'password123', NULL, '2025-01-10 09:15:00', '2025-01-10 09:15:00'),
  ('user17@demo.com', 'password123', NULL, '2025-01-10 09:20:00', '2025-01-10 09:20:00'),
  ('user18@demo.com', 'password123', NULL, '2025-01-10 09:25:00', '2025-01-10 09:25:00'),
  ('user19@demo.com', 'password123', NULL, '2025-01-10 09:30:00', '2025-01-10 09:30:00'),
  ('user20@demo.com', 'password123', NULL, '2025-01-10 09:35:00', '2025-01-10 09:35:00'),
  ('user21@demo.com', 'password123', NULL, '2025-01-10 09:40:00', '2025-01-10 09:40:00'),
  ('user22@demo.com', 'password123', NULL, '2025-01-10 09:45:00', '2025-01-10 09:45:00'),
  ('user23@demo.com', 'password123', NULL, '2025-01-10 09:50:00', '2025-01-10 09:50:00'),
  ('user24@demo.com', 'password123', NULL, '2025-01-10 09:55:00', '2025-01-10 09:55:00'),
  ('user25@demo.com', 'password123', NULL, '2025-01-10 10:00:00', '2025-01-10 10:00:00'),
  ('user26@demo.com', 'password123', NULL, '2025-01-10 10:05:00', '2025-01-10 10:05:00'),
  ('user27@demo.com', 'password123', NULL, '2025-01-10 10:10:00', '2025-01-10 10:10:00'),
  ('user28@demo.com', 'password123', NULL, '2025-01-10 10:15:00', '2025-01-10 10:15:00'),
  ('user29@demo.com', 'password123', NULL, '2025-01-10 10:20:00', '2025-01-10 10:20:00'),
  ('user30@demo.com', 'password123', NULL, '2025-01-10 10:25:00', '2025-01-10 10:25:00');

INSERT INTO profiles (name, user_id, created, updated) VALUES
  ('Perfil Usuario 1', (SELECT id FROM users WHERE email = 'user1@demo.com'), '2025-01-10 08:00:00', '2025-01-10 08:00:00'),
  ('Perfil Usuario 2', (SELECT id FROM users WHERE email = 'user2@demo.com'), '2025-01-10 08:05:00', '2025-01-10 08:05:00'),
  ('Perfil Usuario 3', (SELECT id FROM users WHERE email = 'user3@demo.com'), '2025-01-10 08:10:00', '2025-01-10 08:10:00'),
  ('Perfil Usuario 4', (SELECT id FROM users WHERE email = 'user4@demo.com'), '2025-01-10 08:15:00', '2025-01-10 08:15:00'),
  ('Perfil Usuario 5', (SELECT id FROM users WHERE email = 'user5@demo.com'), '2025-01-10 08:20:00', '2025-01-10 08:20:00'),
  ('Perfil Usuario 6', (SELECT id FROM users WHERE email = 'user6@demo.com'), '2025-01-10 08:25:00', '2025-01-10 08:25:00'),
  ('Perfil Usuario 7', (SELECT id FROM users WHERE email = 'user7@demo.com'), '2025-01-10 08:30:00', '2025-01-10 08:30:00'),
  ('Perfil Usuario 8', (SELECT id FROM users WHERE email = 'user8@demo.com'), '2025-01-10 08:35:00', '2025-01-10 08:35:00'),
  ('Perfil Usuario 9', (SELECT id FROM users WHERE email = 'user9@demo.com'), '2025-01-10 08:40:00', '2025-01-10 08:40:00'),
  ('Perfil Usuario 10', (SELECT id FROM users WHERE email = 'user10@demo.com'), '2025-01-10 08:45:00', '2025-01-10 08:45:00'),
  ('Perfil Usuario 11', (SELECT id FROM users WHERE email = 'user11@demo.com'), '2025-01-10 08:50:00', '2025-01-10 08:50:00'),
  ('Perfil Usuario 12', (SELECT id FROM users WHERE email = 'user12@demo.com'), '2025-01-10 08:55:00', '2025-01-10 08:55:00'),
  ('Perfil Usuario 13', (SELECT id FROM users WHERE email = 'user13@demo.com'), '2025-01-10 09:00:00', '2025-01-10 09:00:00'),
  ('Perfil Usuario 14', (SELECT id FROM users WHERE email = 'user14@demo.com'), '2025-01-10 09:05:00', '2025-01-10 09:05:00'),
  ('Perfil Usuario 15', (SELECT id FROM users WHERE email = 'user15@demo.com'), '2025-01-10 09:10:00', '2025-01-10 09:10:00'),
  ('Perfil Usuario 16', (SELECT id FROM users WHERE email = 'user16@demo.com'), '2025-01-10 09:15:00', '2025-01-10 09:15:00'),
  ('Perfil Usuario 17', (SELECT id FROM users WHERE email = 'user17@demo.com'), '2025-01-10 09:20:00', '2025-01-10 09:20:00'),
  ('Perfil Usuario 18', (SELECT id FROM users WHERE email = 'user18@demo.com'), '2025-01-10 09:25:00', '2025-01-10 09:25:00'),
  ('Perfil Usuario 19', (SELECT id FROM users WHERE email = 'user19@demo.com'), '2025-01-10 09:30:00', '2025-01-10 09:30:00'),
  ('Perfil Usuario 20', (SELECT id FROM users WHERE email = 'user20@demo.com'), '2025-01-10 09:35:00', '2025-01-10 09:35:00'),
  ('Perfil Usuario 21', (SELECT id FROM users WHERE email = 'user21@demo.com'), '2025-01-10 09:40:00', '2025-01-10 09:40:00'),
  ('Perfil Usuario 22', (SELECT id FROM users WHERE email = 'user22@demo.com'), '2025-01-10 09:45:00', '2025-01-10 09:45:00'),
  ('Perfil Usuario 23', (SELECT id FROM users WHERE email = 'user23@demo.com'), '2025-01-10 09:50:00', '2025-01-10 09:50:00'),
  ('Perfil Usuario 24', (SELECT id FROM users WHERE email = 'user24@demo.com'), '2025-01-10 09:55:00', '2025-01-10 09:55:00'),
  ('Perfil Usuario 25', (SELECT id FROM users WHERE email = 'user25@demo.com'), '2025-01-10 10:00:00', '2025-01-10 10:00:00'),
  ('Perfil Usuario 26', (SELECT id FROM users WHERE email = 'user26@demo.com'), '2025-01-10 10:05:00', '2025-01-10 10:05:00'),
  ('Perfil Usuario 27', (SELECT id FROM users WHERE email = 'user27@demo.com'), '2025-01-10 10:10:00', '2025-01-10 10:10:00'),
  ('Perfil Usuario 28', (SELECT id FROM users WHERE email = 'user28@demo.com'), '2025-01-10 10:15:00', '2025-01-10 10:15:00'),
  ('Perfil Usuario 29', (SELECT id FROM users WHERE email = 'user29@demo.com'), '2025-01-10 10:20:00', '2025-01-10 10:20:00'),
  ('Perfil Usuario 30', (SELECT id FROM users WHERE email = 'user30@demo.com'), '2025-01-10 10:25:00', '2025-01-10 10:25:00');

-- migrate:down

DELETE FROM profiles
WHERE user_id IN (
  SELECT id FROM users WHERE email LIKE 'user%@demo.com'
);

DELETE FROM users WHERE email LIKE 'user%@demo.com';
DELETE FROM semesters WHERE name IN ('2025-2', '2026-0', '2026-1', '2026-2');
DELETE FROM districts WHERE name IN ('Lima Centro', 'Miraflores', 'San Isidro', 'Surco', 'Callao');
