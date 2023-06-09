
-- User table
insert into users(mail, password, first_name, last_name, phone_num) values ('20522122@gm.uit.edu.vn', '$2b$10$5c8sOgAuE59yKUpR9vEdCuI.fX..VAY/l/VyeaKunVJzhqc4y0OGS', 'Nguyễn', 'Tuấn', '0967781796');
insert into users(mail, password, first_name, last_name, phone_num) values ('20521366@gm.uit.edu.vn', '$2b$10$5c8sOgAuE59yKUpR9vEdCuI.fX..VAY/l/VyeaKunVJzhqc4y0OGS', 'Mai', 'Hưng', '0967781796');
insert into users(mail, password, first_name, last_name, phone_num) values ('20521760@gm.uit.edu.vn', '$2b$10$5c8sOgAuE59yKUpR9vEdCuI.fX..VAY/l/VyeaKunVJzhqc4y0OGS', 'Hoàng', 'Phúc', '0967781796');
insert into users(mail, password, first_name, last_name, phone_num) values ('20521480@gm.uit.edu.vn', '$2b$10$5c8sOgAuE59yKUpR9vEdCuI.fX..VAY/l/VyeaKunVJzhqc4y0OGS', 'Nguyễn', 'Khôi', '0961742715');
insert into users(mail, password, first_name, last_name, phone_num) values ('20521450@gm.uit.edu.vn', '$2b$10$5c8sOgAuE59yKUpR9vEdCuI.fX..VAY/l/VyeaKunVJzhqc4y0OGS', 'Nguyễn', 'Khanh', '0967781796');
insert into users(mail, password, first_name, last_name, phone_num) values ('20521565@gm.uit.edu.vn', '$2b$10$5c8sOgAuE59yKUpR9vEdCuI.fX..VAY/l/VyeaKunVJzhqc4y0OGS', 'Lữ', 'Long', '0967781796');

-- GroupTask table
insert into group_task(user_mail, name) values ('20522122@gm.uit.edu.vn', 'SE109');
insert into group_task(user_mail, name) values ('20522122@gm.uit.edu.vn', 'IE106');
insert into group_task(user_mail, name) values ('20522122@gm.uit.edu.vn', 'SE346');

-- Task table
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Mozes', 'Ohio Valley College', '2023-05-01', '2023-01-18', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Glendon', 'Postgraduate Institute of Pali & Buddhist Studies (University of Kelaniya)', '2023-04-30', '2023-03-11', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Vally', 'Institute of Teachers Education, Raja Melewar', '2023-04-18', '2022-07-21', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Merilyn', 'Universitas Katolik Widya Karya', '2023-04-20', '2023-01-20', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Carolus', 'University of Malawi', '2023-04-25', '2022-10-21', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Ward', 'Kyoto Institute of Technology', '2023-04-23', '2022-05-18', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Adolph', 'Tikrit University', '2023-04-02', '2022-10-17', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Reena', 'Al Muthanna University', '2023-04-10', '2022-09-11', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Randy', 'London School of Jewish Studies', '2023-04-28', '2022-06-11', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Alyda', 'Far Easten State University of Humanities', '2023-04-03', '2023-03-03', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Judie', 'Universidad Centroamericana de Ciencias Empresariales (UCEM)', '2023-04-01', '2022-10-05', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Timmy', 'Yerevan Haibusak University', '2023-04-01', '2023-03-18', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Danell', 'University of Health Sciences', '2023-05-01', '2022-09-04', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Anallise', 'Mahidol University International College', '2023-04-28', '2022-12-15', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Sande', 'Delta State University', '2023-04-25', '2022-11-12', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Lee', 'Centro Universitário de Araraquara', '2023-04-11', '2022-05-28', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Dalenna', 'University of Eastern Philippines', '2023-04-18', '2023-05-21', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Lenora', 'Nanjing University of Chemical Technology', '2023-04-25', '2023-05-03', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Pierson', 'Kyushu Tokai University', '2023-04-29', '2023-04-07', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Tootsie', 'Institut National des Télécommunications', '2023-04-04', '2022-05-29', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Rem', 'University of Wisconsin - River Falls', '2023-04-02', '2023-05-09', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Coralie', 'Université de la Manouba', '2023-04-03', '2023-01-28', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Gearard', 'Gyeongsang National University', '2023-04-25', '2023-03-24', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Clevey', 'Akdeniz University', '2023-04-13', '2022-06-19', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Jacquelyn', 'Global University', '2023-04-11', '2022-07-04', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Everard', 'Institute of Teachers Education, Kent', '2023-04-27', '2022-06-15', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Elisabet', 'Davidson College', '2023-04-15', '2023-01-24', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Eloise', 'Eurasian Institute of market', '2023-04-30', '2023-04-30', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Ezequiel', 'Institución Universitaria Iberoamericana', '2023-04-28', '2023-05-06', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Dari', 'Anhui University of Finance and Economics', '2023-04-10', '2022-08-04', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Egbert', 'Norwegian University of Sport and Physical Education', '2023-04-11', '2022-09-02', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Nickie', 'Papua New Guinea University of Technology', '2023-04-01', '2022-09-24', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Goldi', 'Portland State University', '2023-04-16', '2023-01-07', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Zarla', 'Ecole Superieur d''Ingenieurs Leonard de Vinci', '2023-04-07', '2022-07-10', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Olive', 'Indian Board of Alternative Medicine', '2023-04-28', '2023-01-19', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Neill', 'Kar University', '2023-04-28', '2022-11-30', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Torr', 'Anhui University of Finance and Economics', '2023-04-15', '2022-10-31', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Ryun', 'Babes-Bolyai University of Cluj-Napoca', '2023-04-05', '2022-12-03', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Reyna', 'University of Tennessee - Knoxville', '2023-04-02', '2022-07-05', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Hermione', 'Aletheia University', '2023-04-16', '2022-12-21', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Arv', 'ECAM - Institut Supérieur Industriel', '2023-04-30', '2023-04-13', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Skelly', 'Novosibirsk State University', '2023-05-03', '2023-03-12', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Liam', 'Bangladesh University of Professionals', '2023-04-28', '2023-03-25', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Berti', 'University of Health Sciences Antigua', '2023-04-24', '2022-08-17', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Meris', 'Lankaran State University', '2023-05-03', '2023-04-06', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Lauryn', 'British College of Osteopathic Medicine', '2023-04-26', '2023-02-18', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Berne', 'Ulyanovsk State Agricultural Academy', '2023-04-16', '2022-11-25', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Ronnie', 'Universidad Peruana de Ciencias e Informática', '2023-04-19', '2022-10-11', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Sheena', 'Universidad Tecnológica de Panamá', '2023-04-12', '2022-12-27', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Stanleigh', 'University of New Hampshire', '2023-05-02', '2022-07-17', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Harriett', 'Xavier University', '2023-04-27', '2023-01-06', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Webster', 'Perlis Islamic Higher Learning Institute', '2023-04-07', '2023-01-16', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Siana', 'Kennesaw State University', '2023-04-06', '2022-11-28', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Hyacinth', 'Universidad de Concepcion', '2023-05-05', '2022-09-11', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Ced', 'Universidad Argentina de la Empresa', '2023-04-14', '2023-02-07', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Barri', 'Pennsylvania Academy of the Fine Arts', '2023-04-11', '2022-09-28', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Aurilia', 'College of the Holy Spirit', '2023-04-06', '2022-05-26', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Nisse', 'Phillips-Universität Marburg', '2023-04-22', '2023-04-02', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Cortney', 'Universidad Nacional de San Juan', '2023-04-17', '2023-01-02', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Maribeth', '2nd Military Medical University', '2023-05-03', '2023-01-25', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Nani', 'Universidad Europea de Madrid', '2023-04-23', '2022-10-01', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Cammie', 'University of Gadarif', '2023-04-22', '2022-06-05', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Josephine', 'Bauhaus Universität Weimar', '2023-04-11', '2022-12-18', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Jonie', 'University of Basrah', '2023-04-01', '2023-04-27', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Mannie', 'University of Southeastern Philippines', '2023-04-15', '2023-05-11', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Rebekah', 'Nuclear Institute for Agriculture and Biology (NIAB)', '2023-04-15', '2023-01-03', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Yovonnda', 'Niigata University', '2023-04-07', '2023-03-16', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Ramsay', 'Indian Institute of Technology, Hyderabad', '2023-04-03', '2022-08-25', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Beatriz', 'Green Mountain College', '2023-04-02', '2022-12-22', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Jo', 'Universitas Muhammadiyah Surakarta', '2023-04-12', '2023-02-24', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Mendel', 'Ajayi Crowther University', '2023-04-18', '2022-09-13', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Maximilian', 'University of Stellenbosch', '2023-04-28', '2022-07-09', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Georgine', 'Universidad del Turabo', '2023-04-25', '2023-01-12', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Kirk', 'Universitas Amir Hamzah', '2023-04-01', '2022-08-20', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Klaus', 'University of Lagos', '2023-04-14', '2022-09-25', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Minette', 'University of Alaska - Fairbanks', '2023-04-11', '2022-12-22', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Hussein', 'Université de Limoges', '2023-04-11', '2022-07-12', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Beryl', 'University of Resita', '2023-04-23', '2023-01-22', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Codi', 'University of Connecticut at Avery Point', '2023-04-21', '2022-09-13', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Chelsea', 'Pontificio Istituto Orientale', '2023-04-25', '2023-01-23', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Ardys', 'Bankura University', '2023-05-01', '2022-12-26', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Brooks', 'Singidunum University', '2023-04-17', '2023-01-26', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Ken', 'Polytechnic University of the Philippines', '2023-04-02', '2023-05-12', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Esdras', 'Pakistan Virtual University', '2023-04-11', '2023-04-23', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Emmalynn', 'Emanuel University', '2023-04-23', '2022-10-17', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Mahmud', 'Universitas Mulawarman', '2023-04-18', '2023-03-22', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Lodovico', 'Nagasaki Prefectural University', '2023-04-03', '2023-04-14', false, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Melodee', 'Amman Arab University for Higher Studies', '2023-04-24', '2023-05-17', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Rhona', 'Pebble Hills University', '2023-04-29', '2023-01-19', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Slade', 'Kazak State University of Agriculture', '2023-05-03', '2022-12-06', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Armand', 'University of Perpetual Help, System Dalta', '2023-04-19', '2022-10-08', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Khalil', 'Universidad Nacional Santiago Antúnez de Mayolo', '2023-05-04', '2022-07-30', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Cad', 'Midland Lutheran College', '2023-05-01', '2022-12-02', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Robbyn', 'National University of Samoa', '2023-04-07', '2023-05-14', true, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Dianne', 'Northeast Agricultural University', '2023-04-04', '2022-12-07', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Malina', 'University of Northern Iowa', '2023-04-13', '2023-03-15', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Rafaelita', 'University College of the Fraser Valley', '2023-05-01', '2022-11-29', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Myrwyn', 'Zimbabwe Open University', '2023-04-06', '2022-06-25', false, true);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Alverta', 'Inoorero University', '2023-04-14', '2022-09-16', true, false);
insert into task (user_mail, title, description, from_date, to_date, is_completed, is_favorited) values ('20522122@gm.uit.edu.vn', 'Sean', 'University of Guam', '2023-04-23', '2022-07-07', true, true);

-- TaskIncluded table
insert into task_included(group_task_id, task_id) values (1, 1);
insert into task_included(group_task_id, task_id) values (2, 2);
insert into task_included(group_task_id, task_id) values (3, 3);
insert into task_included(group_task_id, task_id) values (1, 4);
insert into task_included(group_task_id, task_id) values (2, 5);
insert into task_included(group_task_id, task_id) values (3, 6);
insert into task_included(group_task_id, task_id) values (1, 7);
insert into task_included(group_task_id, task_id) values (2, 8);
insert into task_included(group_task_id, task_id) values (3, 9);
insert into task_included(group_task_id, task_id) values (1, 10);
insert into task_included(group_task_id, task_id) values (2, 11);
insert into task_included(group_task_id, task_id) values (3, 12);
insert into task_included(group_task_id, task_id) values (1, 13);
insert into task_included(group_task_id, task_id) values (2, 14);
insert into task_included(group_task_id, task_id) values (3, 15);
insert into task_included(group_task_id, task_id) values (1, 16);
insert into task_included(group_task_id, task_id) values (2, 17);
insert into task_included(group_task_id, task_id) values (3, 18);
insert into task_included(group_task_id, task_id) values (1, 19);
insert into task_included(group_task_id, task_id) values (2, 20);

-- SubTask table
insert into sub_task (task_id, title, is_completed) values (3, 'Wendall', true);
insert into sub_task (task_id, title, is_completed) values (5, 'Tanny', true);
insert into sub_task (task_id, title, is_completed) values (2, 'Casar', true);
insert into sub_task (task_id, title, is_completed) values (3, 'Carr', true);
insert into sub_task (task_id, title, is_completed) values (4, 'Elwin', false);
insert into sub_task (task_id, title, is_completed) values (2, 'Brock', true);
insert into sub_task (task_id, title, is_completed) values (5, 'Abeu', false);
insert into sub_task (task_id, title, is_completed) values (5, 'Jacques', false);
insert into sub_task (task_id, title, is_completed) values (4, 'Nolly', false);
insert into sub_task (task_id, title, is_completed) values (2, 'Stephen', true);
insert into sub_task (task_id, title, is_completed) values (1, 'Hans', true);
insert into sub_task (task_id, title, is_completed) values (4, 'Claire', true);
insert into sub_task (task_id, title, is_completed) values (5, 'Onfre', false);
insert into sub_task (task_id, title, is_completed) values (4, 'Gustav', false);
insert into sub_task (task_id, title, is_completed) values (3, 'Talbot', true);
insert into sub_task (task_id, title, is_completed) values (2, 'Rochester', false);
insert into sub_task (task_id, title, is_completed) values (1, 'Travis', false);
insert into sub_task (task_id, title, is_completed) values (4, 'Shalom', false);
insert into sub_task (task_id, title, is_completed) values (1, 'Hillery', false);
insert into sub_task (task_id, title, is_completed) values (2, 'Lorant', true);

-- Voice table
insert into voice (task_id, name, file) values (7, 'Daisi', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (5, 'Jermaine', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (4, 'Pooh', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (6, 'Shaylyn', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (3, 'Verene', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (5, 'Novelia', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (5, 'Linzy', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (6, 'Ellen', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (7, 'Moyna', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (7, 'Lusa', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (3, 'Cahra', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (3, 'Shaylyn', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (3, 'Celesta', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (7, 'Raven', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (4, 'Elena', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (6, 'Helga', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (7, 'Janaye', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (4, 'Cindra', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (3, 'Kally', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');
insert into voice (task_id, name, file) values (5, 'Ashien', 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3');