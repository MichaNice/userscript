// ==UserScript==
// @name           Instan Menu TMU
// @version        1.5
// @description    Menu instan TMU
// @include			https://ultra.trophymanager.com/players/*
// @include        https://ultra.trophymanager.com/home*
// @include        http://ultra.trophymanager.com/forum/id/general/
// @include        https://ultra.trophymanager.com/cup/
// @include        https://test.ultra.trophymanager.com/*
// @include        https://ultra.trophymanager.com/league/#pa
// @include        https://ultra.trophymanager.com/home/box
// @exclude        https://ultra.trophymanager.com/banners*
// @exclude        https://ultra.trophymanager.com/showprofile.php*

// @exclude        https://ultra.trophymanager.com/userguide.php*
// @exclude        https://ultra.trophymanager.com/livematch.php*manual_show.php
// @exclude        https://ultra.trophymanager.com/manual_show.php*
// @exclude        https://ultra.trophymanager.com/live*
// @exclude        https://ultra.trophymanager.com/transform.php
// @exclude        https://ultra.trophymanager.com/translate
// @exclude        https://ultra.trophymanager.com/translate?*
// @exclude			https://ultra.trophymanager.com/players
// ==/UserScript==



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Customize Section: Customize TrophyBuddy to suit your personal preferences																		///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//																														///

var myclubid = "16965";				// if myclubid = "", some functions won't work. Add your team-id like this: var myclubid = "22882" to unlock those additional features
var secondaryteamid = "16965";	// edit this number, so that you will see a second link to the squad page of a secondary team
var menubar = "yes";				// switch yes/no to turn the menubar on/off	
var sidebar = "no";				// switch yes/no to turn the sidebar on/off	
var PlayerDataPlus = "no";			// switch yes/no to turn the PlayerDataPlus on/off
var PlayerDataPlusPosition = "topleft"; // you can choose between "topleft" and "bottomleft"	and "inside"
var hovermenu = "no";	// switch to "yes" to bring back the old hover menu style from TM1.1	(adapted from TM Auxiliary and slightly modified)
var alt_training = "no";	// switch to "yes" to show an alternate version of the training overview (adapted from TM Auxiliary and slightly modified)
var old_skills = "no";		// switch to "yes" to to bring back the old look of the skills on the player page (adapted from TM Auxiliary and slightly modified)	
//var oldpos = "yes";			// switch to "yes" to to bring back the old look of player positions	
var bronze_stars = "no";	// switch to "yes" to to add bronze stars for skill values 18 for coaches and scouts
//																														///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var language = "id";     // choose your language, check supported languages below:

var rou_factor = 0.00405;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//												SUPPORTED LANGUAGES														///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//																														///
//The following languages are supported right now: 																						///
//	
//  id = Indonesia																													///
//	ar = Arabic																												///
//	da = Danish																												///																																					///
//	de = German																											///
//	en = English																												///
//	fr = French																												///
//	he = Hebrew																											///
//	hu = Hungarian																											///
//	pl = Polish																												///
//	po = Portuguese																												///
//	ro = Romanian																											///
//	sl = Slovakian																											///
//																														///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Squad2 = "(Tim Ke-2)";
var YourRecentPosts = "Posting terakhir anda";
var GoYourRecentPosts = "Lihat Posting terakhir anda";

switch (language) {

// Ganti Bahasa----------------------------------------------------------------------
// Indonesia
 case "id":
		var Home = "Home";
		var CheckYourMails = "Pesan Masuk";
		var League = "Liga";
		var Cup = "Piala Nasional";
		var Exit = "Keluar Trophy Manager";
			
		var GoCurrentBids = "Lihat Penawaran Terkini";
		var GoTactics = "Ke Taktik";
 		var GoYouthAcademy = "Ke Akademi Pemain Muda";
		//var GoHireCoaches = "Ke Pelatih Baru";
		var GoHireScouts = "Rekrut Pemandu Bakat";
		//var GoMyCoaches = "Coaches Team";
		var GoMyScouts = "Pemandu Bakat Team";
		var	GoScoutReports = "Laporan Pemandu Bakat";
		var GoPlayerNotes = "Catatan Pemain";		// 404errorに・・・
		var GoTrainingOverview = "Lihat Hasil Latihan";
		var GoTrainingTeams = "Latihan Tim Manual";
		var GoForum = "Ke Forum";
		var GoTMUserGuide = "Lihat Panduan Main";
		var GoTBConference = "Konfrensi Trophy Buddy";
		
		var GoTransferForum = "Ke Forum Transfer";
		var GoGeneralForum = "Ke Forum Umum";
		var GoAnnouncementForum = "Forum Announcement";
		//var GoFederations = "Go to Federations";
		
	var Team = " Team";	
		var CurrentBids = "入札";
		var Squad = "チーム概略";
		var Tactics = "戦術";
		var YouthAcademy = "ユースの成長";
	var Staff = " スタッフ情報";
		var HireCoaches = "コーチ採用";
		var HireScouts = "スカウト採用";
		var ScoutReports = "スカウトレポート"; // スカウト一覧と同じリンク
		var MyCoaches = "コーチ一覧";				
		var MyScouts = "スカウト一覧"; // スカウトレポートと同じリンク
	var Training = " トレーニング情報";	
		var PlayerNotes = "Player Notes";
		var TrainingOverview = "トレーニング概略"; 
		var TrainingTeams = "トレーニング指示";
	var Community = " コミュニティ";	
		var Forum = "Forum Indonesia";
		var TMUserGuide = "ユーザー・ガイド";
		var TBConference = "Trophybuddy 会議";
	break;

// Japan
 case "jp":
		var Home = "ホーム";
		var CheckYourMails = "メール";
		var League = "リーグ";
		var Cup = "カップ";
		var Exit = "ログアウト";
			
		var GoCurrentBids = "入札";
		var GoTactics = "戦術";
 		var GoYouthAcademy = "ユースの成長";		
		var GoHireCoaches = "コーチを採用";
		var GoHireScouts = "スカウトを採用";
		var GoMyCoaches = "コーチ";
		var GoMyScouts = "スカウト";
		var	GoScoutReports = "スカウト"; // 同上。なぜ二つ同じリンクがあるのか・・・
		var GoPlayerNotes = "See your player notes";		// 404errorに・・・
		var GoTrainingOverview = "トレーニング概略";
		var GoTrainingTeams = "トレーニング";
		var GoForum = "フォーラム";
		var GoTMUserGuide = "ユーザー・ガイド";
		var GoTBConference = "TrophyBuddyの会議（フォーラム）";
		
		var GoTransferForum = "Transfer（フォーラム）";
		var GoGeneralForum = "General（フォーラム）";
		var GoAnnouncementForum = "Announcement（フォーラム）";
		//var GoFederations = "Go to Federations";
		
	var Team = " チーム情報";	
		var CurrentBids = "入札";
		var Squad = "チーム概略";
		var Tactics = "戦術";
		var YouthAcademy = "ユースの成長";
	var Staff = " スタッフ情報";
		var HireCoaches = "コーチ採用";
		var HireScouts = "スカウト採用";
		var ScoutReports = "スカウトレポート"; // スカウト一覧と同じリンク
		var MyCoaches = "コーチ一覧";				
		var MyScouts = "スカウト一覧"; // スカウトレポートと同じリンク
	var Training = " トレーニング情報";	
		var PlayerNotes = "Player Notes";
		var TrainingOverview = "トレーニング概略"; 
		var TrainingTeams = "トレーニング指示";
	var Community = " コミュニティ";	
		var Forum = "フォーラム";
		var TMUserGuide = "ユーザー・ガイド";
		var TBConference = "Trophybuddy 会議";
	break;
// ここまで----------------------------------------------------------------------

//ARABIC
 case "ar":
		var Home = "?????? ????????";
		var CheckYourMails = "???????";
		var League = "??????";
		var Cup = "?????";
		var Exit = "????? ????";
			
		var GoCurrentBids = "???? ?????? ???????";
		var GoTactics = "??????";
		var GoYouthAcademy = "???? ??? ???????? ??????";
		var GoHireCoaches = "????? ?? ?????? ???";
		var GoHireScouts = "????? ?? ?????? ???";
		var GoMyCoaches = "???? ??? ????? ????? ?????? ????????";
		var GoMyScouts = "???? ??? ????? ????? ?????? ????????";
		var GoScoutReports = "???? ?? ??? ?????? ???????";
		var GoPlayerNotes = "???? ??????? ????????";
		var GoTrainingOverview = "???? ????? ???????";
		var GoTrainingTeams = "?????? ???????? ?????????";
		var GoForum = "???? ?????????";
		var GoTMUserGuide = "???? ???? ????????";
		var GoTBConference = "????? ????? ????";
		
		var GoTransferForum = "???? ??? ????? ??????????";
		var GoGeneralForum = "???? ??? ??????? ???????";
		var GoAnnouncementForum = "???? ??? ????? ???????";
		//var GoFederations = "?????????";
		
	var Team = "??????";	
		var CurrentBids = "?????? ???????";
		var Squad = "????????";
		var Tactics = "?????";
		var YouthAcademy = "??????????";
	var Staff = "????????";
		var HireCoaches = "????? ?? ????";
		var HireScouts = "????";
		var ScoutReports = "?????? ???????";
		var MyCoaches = "????????";
		var MyScouts = "???????";
	var Training = "???????";	
		var PlayerNotes = "?????????";
		var TrainingOverview = "???????? ?????????";
		var TrainingTeams = "??????? ?????????";
	var Community = "???????";
		var Forum = "???????";
		var TMUserGuide = "???? ????????";
		var TBConference = "????? ????? ????";
	break;

	
//DANISH
case "da":
		var Home = "Hjemme";
		var CheckYourMails = "Las Dine Beskeder";
		var League = "Liga";
		var Cup = "Pokal";
		var Exit = "Forlad TrophyManager";

		var GoCurrentBids = "Se Bud";
		var GoTactics = "Ga til Taktik";
		var GoYouthAcademy = "Ga til Ungdomsakademi";
		var GoHireCoaches = "Hyr nye Tranere";
		var GoHireScouts = "Hyr nye Scouts";
		var GoMyCoaches = "Se dine tranere";
		var GoMyScouts = "Se dine scouts";
		var GoScoutReports = "Se scoutrapporter";
		var GoPlayerNotes = "Se spiller noter";
		var GoTrainingOverview = "Se traningsresultat";
		var GoTrainingTeams = "Andre traningshold";
		var GoForum = "Ga til forummet";
		var GoTMUserGuide = "Las brugermanualen";
		var GoTBConference = "Ga til TrophyBuddy-Konferencen";

		var GoTransferForum = "Ga til Transfer forummet";
		var GoGeneralForum = "Ga til Generalt forummet";
		var GoAnnouncementForum = "Ga til Announcement";
		//var GoFederations = "Ga til Konferencer";

	var Team = "Hold";
		var CurrentBids = "Nuvarende Bud";
		var Squad = "Trup";
		var Tactics = "Taktik";
		var YouthAcademy = "Ungdomsakadami";
	var Staff = "Staff";
		var HireCoaches = "Hyr Tranere";
		var HireScouts = "Hyr Tranere";
		var ScoutReports = "Scout Rapporter";
		var MyCoaches = "Mine Tranere";
		var MyScouts = "Mine Scouts";
	var Training = "Traning";
		var PlayerNotes = "Spiller Noter";
		var TrainingOverview = "Tranings Overblik";
		var TrainingTeams = "Tranings Hold";
	var Community = "Community-Links";
		var Forum = "Forum";
		var TMUserGuide = "TM-Brugermanual";
		var TBConference = "TrophyBuddy-Konference";
	break;
	
	
//GERMAN	
case "de":
	var Home = "Startseite";
	var CheckYourMails = "Zum Postfach wechseln";
	var League = "Liga";
	var Cup = "Pokal";
	var Exit = "Ausloggen";
				
		var GoCurrentBids = "Laufende Transfergebote anschauen";
		var GoTactics = "Zum Taktikbereich";
 		var GoYouthAcademy = "Die Jugendakademie besuchen";		
		var GoHireCoaches = "Neue Trainer einstellen";
		var GoHireScouts = "Neue Scouts einstellen";
		var GoMyCoaches = "Sieh dir deine Trainer an";
		var GoMyScouts = "Sieh dir deine Scouts an";		
		var	GoScoutReports = "Schau dir deine Scout-Reporte an";
		var GoPlayerNotes = "Spielernotizen aufrufen";		
		var GoTrainingOverview = "Uberprufe die Trainingsergebnisse";
		var GoTrainingTeams = "Passe deine Trainingsgruppen an";
		var GoForum = "Durchstobere die Foren";
		var GoTMUserGuide = "Lies das Handbuch";
		var GoTBConference = "Feedback geben";
		
		var GoTransferForum = "Das Transferforum besuchen";
		var GoGeneralForum = "Das Generalforum besuchen";
		var GoAnnouncementForum = "Halte Ausschau nach neuen Ankundigungen der Entwickler";
		//var GoFederations = "Foderationen besuchen";
	
	var Team = "Team";
		var CurrentBids = "Aktuelle Gebote";			
		var Squad = "Mannschaftsubersicht";
		var Tactics = "Taktiken";
		var YouthAcademy = "Jugendakademie";
	var Staff = "Mitarbeiter";
		var HireCoaches = "Trainer";
		var HireScouts = "Scouts kaufen";
		var ScoutReports = "Scout Reporte";
		var MyCoaches = "MyTrainer";
		var MyScouts = "MyScouts";
	var Training = "Training";	
		var PlayerNotes = "Spielernotizen";
		var TrainingOverview = "Trainingsubersicht";
		var TrainingTeams = "Trainingsgruppen";
	var Community = "Community-Links";	
		var Forum = "Forum";
		var TMUserGuide = "TM-Handbuch";
		var TBConference = "TrophyBuddy-Feedback";
	break;	
	
	
// ENGLISH
case "en":
		var Home = "Home";
		var CheckYourMails = "Check your mails";
		var League = "League";
		var Cup = "Cup";
		var Exit = "Exit TrophyManager";
			
		var GoCurrentBids = "See Current Bids";
		var GoTactics = "Go to Tactics";
 		var GoYouthAcademy = "Go to Youth Academy";		
		var GoHireCoaches = "Hire new coaches";
		var GoHireScouts = "Hire new scouts";
		var GoMyCoaches = "Take a look at your coaches";
		var GoMyScouts = "Take a look at your scouts";
		var	GoScoutReports = "Check what you have scouted";
		var GoPlayerNotes = "See your player notes";		
		var GoTrainingOverview = "Check the training results";
		var GoTrainingTeams = "Change your training teams";
		var GoForum = "Browse forums";
		var GoTMUserGuide = "Read the User-Guide";
		var GoTBConference = "Enter the TrophyBuddy-Conference";
		
		var GoTransferForum = "Go to Transfer forum";
		var GoGeneralForum = "Go to General forum";
		var GoAnnouncementForum = "Go to Announcement forum";
		//var GoFederations = "Go to Federations";
		
	var Team = "Team";	
		var CurrentBids = "Current Bids";
		var Squad = "Squad";
		var Tactics = "Tactics";
		var YouthAcademy = "Youth Academy";
	var Staff = "Staff";
		var HireCoaches = "Hire Coaches";
		var HireScouts = "Scouts";
		var ScoutReports = "Scout Reports";
		var MyCoaches = "MyCoaches";				
		var MyScouts = "MyScouts";
	var Training = "Training";	
		var PlayerNotes = "Player Notes";
		var TrainingOverview = "Training Overview"; 
		var TrainingTeams = "Training Teams";
	var Community = "Community-Links";	
		var Forum = "Forum";
		var TMUserGuide = "TM-UserGuide";
		var TBConference = "TrophyBuddy-Conference";
	break;


//FRENCH
 case "fr":
		var Home = "Accueil";
		var CheckYourMails = "Messages";
		var League = "Tournoi";
		var Cup = "Coupe";
		var Exit = "Deconnexion";
			
		var GoCurrentBids = "Encheres en cours";
		var GoTactics = "Tactiques";
		var GoYouthAcademy = "Centre de formation";
		var GoHireCoaches = "Recruter un coach";
		var GoHireScouts = "Recruter un scout";
		var GoMyCoaches = "Coachs";
		var GoMyScouts = "Scouts";
		var GoScoutReports = "Rapports de scout";
		var GoPlayerNotes = "Notes";
		var GoTrainingOverview = "Compte rendu entrainement";
		var GoTrainingTeams = "Entrainement";
		var GoForum = "Forum";
		var GoTMUserGuide = "Manuel de jeu";
		var GoTBConference = "TrophyBuddy Conference";
		
		var GoTransferForum = "Forum des transferts";
		var GoGeneralForum = "Forum general";
		var GoAnnouncementForum = "Annonces officielles";
		//var GoFederations = "Federations";
		
	var Team = "Team";
		var CurrentBids = "Encheres actuelles";
		var Squad = "Equipe";
		var Tactics = "Tactiques";
		var YouthAcademy = "Centre de formation";
	var Staff = "Staff";
		var HireCoaches = "Recruter un coach";
		var HireScouts = "Recruter un scout";
		var ScoutReports = "Rapport de scout";
		var MyCoaches = "Mes coachs";
		var MyScouts = "Mes scouts";
	var Training = "Entrainement";
		var PlayerNotes = "Notes joueurs";
		var TrainingOverview = "Compte rendu d'entrainement";
		var TrainingTeams = "Equipe d'entrainement";
	var Community = "Communautes";
		var Forum = "Forum";
		var TMUserGuide = "TM-Manuel de jeu";
		var TBConference = "TrophyBuddy-Conference";
	break;	
	
	
//HEBREW
 case "he":
		var Home = "???";
		var CheckYourMails = "???? ?? ????? ???";
		var League = "???";
		var Cup = "????";
		var Exit = "?? ?????? ???'?";

		var GoCurrentBids = "??? ????? ???????";
		var GoTactics = "???? ???????";
		var GoYouthAcademy = "???? ??????? ?????";
		var GoHireCoaches = "???? ?????? ?????";
		var GoHireScouts = "???? ??????? ?????";
		var GoMyCoaches = "??? ??? ??????? ???";
		var GoMyScouts = "??? ??? ???????? ???";
		var GoScoutReports = "???? ?? ?????? ?????? ?? ??????";
		var GoPlayerNotes = "??? ?? ????? ?? ??????";
		var GoTrainingOverview = "???? ?? ?????? ????????";
		var GoTrainingTeams = "??? ?? ?????? ?????? ???";
		var GoForum = "???? ??????";
		var GoTMUserGuide = "??? ?? ??????-??????";
		var GoTBConference = "???? ?????? ??????-??? ??????";

		var GoTransferForum = "???? ?????? ??????";
		var GoGeneralForum = "???? ?????? ?????";
		var GoAnnouncementForum = "???? ?????? ???????";
		//var GoFederations = "???? ????????";

	var Team = "?????";
		var CurrentBids = "????? ???????";
		var Squad = "???";
		var Tactics = "??????";
		var YouthAcademy = "?????? ????";
	var Staff = "????";
		var HireCoaches = "???? ??????";
		var HireScouts = "???? ???????";
		var ScoutReports = "????? ???????";
		var MyCoaches = "??????? ???";
		var MyScouts = "???????? ???";
	var Training = "???????";
		var PlayerNotes = "????? ????";
		var TrainingOverview = "????? ?????";
		var TrainingTeams = "?????? ?????";
	var Community = "????-?????";
		var Forum = "?????";
		var TMUserGuide = "?????-?????";
		var TBConference = "????? ??????-???";
	break;		
	

//HUNGARIAN
 case "hu":
		var Home = "Otthon";
		var CheckYourMails = "Levelek";
		var League = "Bajnoksag";
		var Cup = "Kupa";
		var Exit = "Kilepes";

		var GoCurrentBids = "Aktiv licitek";
		var GoTactics = "Taktika modositasa";
		var GoYouthAcademy = "Ifiakademia meglatogatasa";
		var GoHireCoaches = "Uj edzo felvetele";
		var GoHireScouts = "Uj megfigyelo felvetele";
		var GoMyCoaches = "Edzok igazgatasa";
		var GoMyScouts = "Megfigyelok igazgatasa";
		var GoScoutReports = "Jelentesek bongeszese";
		var GoPlayerNotes = "Jatekos jegyzetek";
		var GoTrainingOverview = "Edzes attekintes";
		var GoTrainingTeams = "Edzesprogram modositasa";
		var GoForum = "Forum bongeszes";
		var GoTMUserGuide = "TM-Kezikonyv";
		var GoTBConference = "TrophyBuddy-Szovetseg";

		var GoTransferForum = "Atigazolasi forum - angol";
		var GoGeneralForum = "Globalis forum - angol";
		var GoAnnouncementForum = "Bejelentes forum - angol";
		//var GoFederations = "Szovetsegek";

	var Team = "Csapat";
		var CurrentBids = "Licitek";
		var Squad = "Keret";
		var Tactics = "Taktika";
		var YouthAcademy = "Ifiakademia";
	var Staff = "Stab";
		var HireCoaches = "Edzo felvetele";
		var HireScouts = "Scoutok";
		var ScoutReports = "Scout jelentesek";
		var MyCoaches = "Edzoim";
		var MyScouts = "Scoutjaim";
	var Training = "Edzes";
		var PlayerNotes = "Jegyzetek";
		var TrainingOverview = "Edzes jelentes";
		var TrainingTeams = "Edzesprogramok";
	var Community = "Kozosseg";
		var Forum = "Forum";
		var TMUserGuide = "TM-Ismerteto";
		var TBConference = "TrophyBuddy-Szovetseg";
	break;	

	
//POLISH	
	case "pl":
		var Home = "Klub";
		var CheckYourMails = "Wiadomo?ci";
		var League = "Liga";
		var Cup = "Puchar Polski";
		var Exit = "Wyloguj";
			
		var GoCurrentBids = "Obecne oferty";
		var GoTactics = "Taktyka";
		var GoToYouthAcademy = "Rozwoj m?odzie?y";
		var GoHireCoaches = "Zatrudnij trenerow";
		var GoHireScouts = "Zatrudnij obserwatorow";
		var GoScoutReports = "Raporty obserwatorow";
		var GoPlayerNotes = "Notatki zawodnikow";
		var GoTrainingOverview = "Wynik treningu";
		var GoTrainingTeams = "Ustawienie treningu";
		var GoForum = "Forum";
		var GoTMUserGuide = "Podr?cznik TM";
		var GoTBConference = "Strona o TrophyBuddy";
		
		var GoTransferForum = "Go to Transfer forum";
		var GoGeneralForum = "Go to General forum";
		var GoAnnouncementForum = "Go to Announcement forum";
		//var GoFederations = "Go to Federations";
		
		var Team = "Dru?yna";
			var CurrentBids = "Obecne oferty";
			var Squad = "Sk?ad";
			var Tactics = "Taktyka";
			var YouthAcademy = "Rozwoj m?odzie?y";
		var Staff = "Personel";
			var HireCoaches = "Zatrudnij trenerow";
			var HireScouts = "Raporty obserwatorow";
			var ScoutReports = "Raporty obserwatorow";
			var MyCoaches = "Trenerzy";
			var MyScouts = "Obserwatorzy";
		var Training = "Trening";
			var PlayerNotes = "Notatki zawodnikow";
			var TrainingOverview = "Wynik treningu";
			var TrainingTeams = "Ustawienie treningu";
		var Community = "Linki";
			var Forum = "Forum";
			var TMUserGuide = "Podr?cznik TM";
			var TBConference = "Strona o TrophyBuddy";
	break;


//Portuguese	
	case "po":
			var Home = "Sede";
			var CheckYourMails = "Caixa de Mensagens";
			var League = "Liga";
			var Cup = "Copa";
			var Exit = "Sair";

			var GoCurrentBids = "Ofertas";
			var GoTactics = "Taticas";
			var GoToYouthAcademy = "Desenvolvimento de Juniores";
			var GoHireCoaches = "Contratar Tecnicos";
			var GoHireScouts = "Contratar Olheiros";
			var GoScoutReports = "Relatorios(Olheiros)";
			var GoPlayerNotes = "Notas";
			var GoTrainingOverview = "Visao Geral de Treinamento";
			var GoTrainingTeams = "Treinamento";
			var GoForum = "Forum";
			var GoTMUserGuide = "Manual";
			var GoTBConference = "Federacao-TB";
			
			var GoTransferForum = "Forum de Transferencias";
			var GoGeneralForum = "Forum Geral";
			var GoAnnouncementForum = "Anuncios"; 

		var Team = "Time";
			var CurrentBids = "Ofertas";
			var Squad = "Jogadores";
			var Tactics = "Taticas";
			var YouthAcademy = "Desenvolvimento de Juniores";
		var Staff = "Comissao Tecnica";
			var HireCoaches = "Contratar Tecnicos";
			var HireScouts = "Contratar Olheiros";
			var ScoutReports = "Relatorios(Olheiros)";
			var MyCoaches = "Treinadores";
			var MyScouts = "Olheiros";
		var Training = "Treinamento";
			var PlayerNotes = "Notas";
			var TrainingOverview = "Visao Geral de Treinamento";
			var TrainingTeams = "Treinamento";
		var Community = "Comunidade";
			var Forum = "Forum";
			var TMUserGuide = "Manual TM";
			var TBConference = "Federacao-TB";
	break;

	
//ROMANIAN	
	case "ro":
			var Home = "Acas?";
			var CheckYourMails = "Verific? mesajele";
			var League = "Lig?";
			var Cup = "Cup?";
			var Exit = "Ie?ire";

			var GoCurrentBids = "Licita?ii";
			var GoTactics = "Tactici";
			var GoYouthAcademy = "Academia de tineret";
			var GoHireCoaches = "Angajeaz? antrenori";
			var GoHireScouts = "Angajeaz? scouteri";
			var GoMyCoaches = "Antrenori";
			var GoMyScouts = "Scouteri";
			var GoScoutReports = "Rapoarte";
			var GoPlayerNotes = "Noti?e";
			var GoTrainingOverview = "Vizualizare antrenament";
			var GoTrainingTeams = "Grupe de antrenament";
			var GoForum = "Cite?te forumul";
			var GoTMUserGuide = "Cite?te manualul";
			var GoTBConference = "Intr? la Conferin?? TrophyBuddy";

			var GoTransferForum = "Forum transferuri";
			var GoGeneralForum = "Forum global";
			var GoAnnouncementForum = "Forum anun?uri";
			//var GoFederations = "Forum federa?ii";

		var Team = "Echipa";
			var CurrentBids = "Licita?ii";
			var Squad = "Juc?tori";
			var Tactics = "Tactici";
			var YouthAcademy = "Academia de tineret";
		var Staff = "Staff";
			var HireCoaches = "Angajare antrenori";
			var HireScouts = "Scouteri";
			var ScoutReports = "Rapoarte";
			var MyCoaches = "Antrenorii";
			var MyScouts = "Scouterii mei";
		var Training = "Antrenament";
			var PlayerNotes = "Noti?e";
			var TrainingOverview = "Vizualizare antr.";
			var TrainingTeams = "Grupe de antr.";
		var Community = "Comunitate";
			var Forum = "Forum";
			var TMUserGuide = "Manual-TM";
			var TBConference = "Conferin?a TrophyBuddy";
	break;	
	
	
//SLOVAC	
	case "sl":
		var Home = "Doma";
		var CheckYourMails = "Pozri maily";
		var League = "Liga";
		var Cup = "Pohar";
		var Exit = "Odhlas sa z TrophyManager";

		var GoCurrentBids = "Ponuky";
		var GoTactics = "Taktia";
		var GoYouthAcademy = "Juniory";
		var GoHireCoaches = "Naja? trenerov";
		var GoHireScouts = "Naja? skautov";
		var GoMyCoaches = "Treneri";
		var GoMyScouts = "Skauti";
		var GoScoutReports = "Spravy skautov";
		var GoPlayerNotes = "Poznamky o hra?och";
		var GoTrainingOverview = "Preh?ad treningu";
		var GoTrainingTeams = "Nastavenie treningu";
		var GoForum = "Forum";
		var GoTMUserGuide = "User-Guide forum";
		var GoTBConference = "TrophyBuddy-Conference forum";

		var GoTransferForum = "Transfer forum";
		var GoGeneralForum = "General forum";
		var GoAnnouncementForum = "Announcement forum";
		//var GoFederations = "Federations forum";

	var Team = "Klub";
		var CurrentBids = "Ponuky";
		var Squad = "Hra?i";
		var Tactics = "Taktika";
		var YouthAcademy = "Juniory";
	var Staff = "Personal";
		var HireCoaches = "Naja? trenerov";
		var HireScouts = "Skauti";
		var ScoutReports = "Spravy skautov";
		var MyCoaches = "Moji treneri";
		var MyScouts = "Moji skauti";
	var Training = "Trening";
		var PlayerNotes = "Poznamky hra?ov";
		var TrainingOverview = "Preh?ad treningu";
		var TrainingTeams = "Trening";
	var Community = "Comunita";
		var Forum = "Forum";
		var TMUserGuide = "TM-UserGuide";
		var TBConference = "TrophyBuddy-Conference"; 
	break;
	
}
// ==/UserScript==

var myurl=document.URL;

if (myurl.match(/scouts/)) {

	if (document.URL == "http://trophymanager.com/scouts/hire/") {

		if (bronze_stars == "yes") {
	
			var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
			loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

				// Show the stars!
				$('td.align_center:contains("18")').html('<img src="http://www.patrick-meurer.de/tm/bronze_star.png">');
				$('td.align_center:contains("19")').html('<img src="/pics/star_silver.png">');
				$('td.align_center:contains("20")').html('<img src="/pics/star.png">');
				$('td.align_center').css('font-weight', 'bold');
			});
		}
		else {

			var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
			loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

				// Show the stars!
				$('td.align_center:contains("19")').html('<img src="/pics/star_silver.png">');
				$('td.align_center:contains("20")').html('<img src="/pics/star.png">');
				$('td.align_center').css('font-weight', 'bold');
			});		
		
		}

	}
	else {
/*		
		if (bronze_stars == "yes") {
		
			var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
			loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

				// Show the stars!
				$('table.border_bottom td:contains("18")').html('<img src="http://www.patrick-meurer.de/tm/bronze_star.png">');
				$('table.border_bottom:eq(0) tr:eq(1) td:contains("19")').html('<img src="/pics/star_silver.png">');
				$('table.border_bottom td:contains("20")').html('<img src="/pics/star.png">');
				$('table.border_bottom td').css('font-weight', 'bold');	
				
			});	
		}
		else {
		
			var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
			loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

				// Show the stars!
				$('table.border_bottom td:contains("19")').html('<img src="/pics/star_silver.png">');
				$('table.border_bottom td:contains("20")').html('<img src="/pics/star.png">');
				$('table.border_bottom td').css('font-weight', 'bold');	
			});	
		
		}*/
	}
}

if (myurl.match(/coaches/)) {

	if (document.URL == "http://trophymanager.com/coaches/hire/") {
	
		if (bronze_stars == "yes") {
	
			var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
			loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

				// Show the stars!
				$('td.align_center:contains("18")').html('<img src="http://www.patrick-meurer.de/tm/bronze_star.png">');
				$('td.align_center:contains("19")').html('<img src="/pics/star_silver.png">');
				$('td.align_center:contains("20")').html('<img src="/pics/star.png">');
				$('td.align_center').css('font-weight', 'bold');
			});
		}
		else {

			var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
			loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

				// Show the stars!
				$('td.align_center:contains("19")').html('<img src="/pics/star_silver.png">');
				$('td.align_center:contains("20")').html('<img src="/pics/star.png">');
				$('td.align_center').css('font-weight', 'bold');
			});		
		
		}
	}
	else {
		
		if (bronze_stars == "yes") {	
			var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
			loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

				// Show the stars!
				$('td:contains("18")').html('<img src="http://www.patrick-meurer.de/tm/bronze_star.png">');
				$('td:contains("19")').html('<img src="/pics/star_silver.png">');
				$('td:contains("20")').html('<img src="/pics/star.png">');
				$('td').css('font-weight', 'bold');	
			});	
		}
		else {
			var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
			loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

				// Show the stars!
				$('td:contains("19")').html('<img src="/pics/star_silver.png">');
				$('td:contains("20")').html('<img src="/pics/star.png">');
				$('td').css('font-weight', 'bold');	
			});	
		
		}
	}
}

	
//Jugendspieler: Position auslesen
/*	pos_y = aux[n].cells[4].innerHTML;
	}

	var skillsumspan_HL = document.createElement("span");
	skillsumspan_HL.innerHTML="<div style=\"color: gold;\"><b>TB-Rating</b></div>";
	document.getElementsByTagName("table")[0].getElementsByTagName('tr')[7].getElementsByTagName('th')[0].appendChild(skillsumspan_HL);

}
}
*/

if (myurl.match(/training-overview/)) {
	
	if (document.URL == "http://trophymanager.com/training-overview/advanced/") {
	if (alt_training = "yes") {
		var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};

		loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {
		    	
			// Black/gray alternating table background
			$('table.zebra tr').css('background-color', '#222222');
			$('table.zebra tr.odd').css('background-color', 'rgb(48, 48, 48)');

			// Small training increases
			$('span.training_small').css('border', '1px rgb(141, 182, 82) solid');
			$('span.training_small').css('background-color', '#45521E');

			// Small training decreases
			$('span.training_part_down').css('border', '1px #D7220E solid');
			$('span.training_part_down').css('background-color', '#502927');

			// Big training increases
			$('span.training_big').css('font-size', '15px');
			$('span.training_big').css('font-weight', 'normal');
			//$('span.training_big').css('text-decoration', 'blink');
			$('span.training_big').css('background-color', '#93B751');
			$('span.training_big').css('color', '#000000');

			// Big training decreases
			$('span.training_down').css('font-size', '13px');
			$('span.training_down').css('font-weight', 'normal');
			$('span.training_down').css('background-color', '#D7220E');
			$('span.training_down').css('color', '#000000');

			// Increase all skill space sizes
			$('span.training_big, span.training_small, span.training_part_down, span.training_down, span.subtle').css('width', '15px');

			// No changes
			$('span.subtle').css('color', '#FFFFFF');

			// Remove position background
			$('table.zebra tr .favposition').css('background-color', '#222222');
			$('table.zebra tr.odd .favposition').css('background-color', 'rgb(48, 48, 48)');

			// Add borders to sides of tables
			$('table.zebra').css('border-left', '3px #222222 solid');
			$('table.zebra').css('border-right', '3px #222222 solid');

			// Intensity & +/- alignment
			$('table.zebra tr td:nth-child(18)').css('padding-right', '12px');
			$('table.zebra tr th:nth-child(19)').css('width', '34px');
			$('table.zebra tr td:nth-child(19) span').css('width', '32px');

			// Intensity & +/- alignment for goalie coach
			$('table.zebra:eq(5) tr td:nth-child(15)').css('padding-right', '12px');
			$('table.zebra:eq(5) tr th:nth-child(15)').css('width', '34px');
			$('table.zebra:eq(5) tr td:nth-child(16) span').css('width', '32px');

			// Coach headers
			$('h3').css('background-color', '#222222');

			// Show the stars!
			//$('span:contains("19")').html('<img src="/pics/star_silver.png">');
			//$('span:contains("20")').html('<img src="/pics/star.png">');
			
			//19 to SilverStar
			$('span.training_part_down:contains("19")').html('<img src="/pics/star_silver.png">');
			$('span.training_down:contains("19")').html('<img src="/pics/star_silver.png">');
			$('span.subtle:contains("19")').html('<img src="/pics/star_silver.png">');
			$('span.training_big:contains("19")').html('<img src="/pics/star_silver.png">');
			$('span.training_big:contains("19")').html('<img src="/pics/star_silver.png">');
			
			//20 to GoldStar
			$('span.training_part_down:contains("20")').html('<img src="/pics/star.png">');
			$('span.training_down:contains("20")').html('<img src="/pics/star.png">');
			$('span.subtle:contains("20")').html('<img src="/pics/star.png">');
			$('span.training_small:contains("20")').html('<img src="/pics/star.png">');
			$('span.training_big:contains("20")').html('<img src="/pics/star.png">');
			
		});
	}
	else {
	
	}
	}
	else {

	}

}


	
if (myurl.match(/club/)) {
	//alert(document.URL)
	var clubstaturl = 'http://trophymanager.com/statistics/club/' + myclubid + '/';
/*
	alert(clubstaturl)
	if (document.URL == clubstaturl) {
	
	}
*/	
	var counttablesfixtures = document.getElementsByTagName("table").length;
	//alert(counttablesfixtures)
	if (counttablesfixtures == 0) {
	
	}
	else {
	
	var checktable = document.getElementsByTagName("table")[0];
	checktable = checktable.getAttribute("class");
	
	if (checktable == "zebra padding") {
	
	var checksquad = document.getElementsByTagName("a")[8];
	checksquad = checksquad.getAttribute("href");
	checksquad = checksquad.replace(/[^a-zA-Z 0-9]+/g,'');
	checksquad = checksquad.replace("club", "");
	/*
		var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};

		loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

			//$('div.std p').css('font-weight', 'bold');
			//$('div.std').css('background-color', '#502927'); // Change Background Color
			//$('td.align_center:contains("19")').html('<img src="/pics/star_silver.png">');
			//$('td.align_center:contains("20")').html('<img src="/pics/star.png">');
			//$('td.align_center').css('font-weight', 'bold');
		});
	*/
	
	
	}
	else {
	
		if (document.URL == "http://trophymanager.com/account/club-info/"){
		
		}
		else {
		
			pro_check = document.getElementsByTagName("a")[17].getAttribute("href");
			pro_check = pro_check.search("pro");
			if (pro_check != -1) {
	
			//league_try = document.getElementsByTagName("a")[19].getAttribute("href");
			//league_try = league_try.search("league");
			//if (league_try != -1) {
				n=0
							}
			else {
				n=-1;
				
			}
			var leaguecheck = document.getElementsByTagName("a")[n+19];
			leaguecheck = leaguecheck.getAttribute("href");
			leaguecheck = leaguecheck.replace("/league/", "");
			//leaguecheck = leaguecheck.replace("/league/", "");
			leaguecheck = leaguecheck.substr(3,leaguecheck.length);
			leaguecheck = leaguecheck.replace(/[^a-zA-Z 0-9]+/g,'');
			leaguecheck = leaguecheck.substr(0,1) + '.' + leaguecheck.substr(1,leaguecheck.length);
			//alert(leaguecheck)
			
			if ((myurl.match(myclubid)) || (myurl.match("clubs"))) {
			
			}
			else {
				var oldleague = document.createElement("span");
				oldleague.innerHTML="<span style=\"color: gold;\"><b> (" + leaguecheck + ")</b></span>";
				document.getElementsByTagName("a")[n+19].appendChild(oldleague);
			}

		}
	}
}}


if (myurl.match(/league/)) {

	var check_statpage = document.URL;
	check_statpage = check_statpage.search("statistics");
	
	if (check_statpage != -1) {
	
		
	}
	else {
/*	//alert(check_statpage)
	var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};

		loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

			$('div.add_comment a').css('font-weight', 'bold');
			$('div.add_comment a').css('font-size', '1.5em');
			//$('div.std').css('background-color', '#502927'); // Change Background Color
			//$('td.align_center:contains("19")').html('<img src="/pics/star_silver.png">');
			//$('td.align_center:contains("20")').html('<img src="/pics/star.png">');
			//$('td.align_center').css('font-weight', 'bold');
		});
*/	
	}
}

if (myurl.match(/youth-development/)) {

	var div_recvspot = document.createElement('div');
	div_recvspot.innerHTML="<div id=\"recvspot\" style=\"position: fixed; z-index: 1000; width: 175px; margin-top: 25px; color: #ff9900; -moz-opacity: .8; text-align: middle; color: gold; display:inline;\"><table style=\"margin-bottom: -1em; background: #5F8D2D; border: 2px #333333 outset;\"><tr><th style=\"padding-left: 5px;\">Youth-Stars</th><th title=\"The potential values from old TM\">~Old Potential</th></tr><tr><td><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"></td><td title=\"+ Best 19*\">20</td></tr><tr><td><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/half_star.png\"></td><td title=\"+ Worst 20*\">17-18-19</td></tr><tr><td><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/dark_star.png\"></td><td>15-16</td></tr><tr><td><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/half_star.png\"><img src=\"http://trophymanager.com/pics/dark_star.png\"></td><td>13-14</td></tr><tr><td><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/dark_star.png\"><img src=\"http://trophymanager.com/pics/dark_star.png\"></td><td>11-12</td></tr><tr><td><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/half_star.png\"><img src=\"http://trophymanager.com/pics/dark_star.png\"><img src=\"http://trophymanager.com/pics/dark_star.png\"></td><td>9-10</td></tr><tr><td><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/star.png\"><img src=\"http://trophymanager.com/pics/dark_star.png\"><img src=\"http://trophymanager.com/pics/dark_star.png\"><img src=\"http://trophymanager.com/pics/dark_star.png\"></td><td>7-8</td></tr></table></div>";
	document.getElementsByTagName("div")[18].appendChild(div_recvspot);
	

}


//alert ("Skript ist aktiv")

if (myurl.match(/players/))  { // hier wird geprueft, ob das die richtige Seite ist

	var check_statpage = document.URL;
	check_statpage = check_statpage.search("statistics");


		if (document.URL == "http://trophymanager.com/players/"){
		
		function embed() {
		var oldFunc = makeTable;

		makeTable = function() {

        ths = ["no","name","age","fp","str","sta","pac","mar","tac","wor","pos","pas","cro","tec","hea","fin","lon","set","asi","rec","bteam"];
        gk_ths = ["no","name","age","fp","str","sta","pac","han","one","ref","ari","jum","com","kic","thr",,,,"asi","rec","bteam"];
        
		myTable = document.createElement('table');
		myTable.className = "hover zebra";

		construct_th();
		var z=0;
		for (i=0; i<players_ar.length; i++) {
			if (players_ar[i]["fp"] != "GK" && add_me(players_ar[i]) && filter_squads()) {
				construct_tr(players_ar[i], z);
				z++;
			}
		}
		if (z == 0) {
			var myRow = myTable.insertRow(-1);
			var myCell = myRow.insertCell(-1);
			myCell.colSpan = 24;
			myCell.innerHTML = other_header;
		}
	    if (filters_ar[1] == 1) {
	        var myRow = myTable.insertRow(-1);
	        var myCell = myRow.insertCell(-1);
	        myCell.className = "splitter";
	        myCell.colSpan = "50";
	        myCell.innerHTML = gk_header;
	        construct_th(true);
	        z=0;
	        for (i=0; i<players_ar.length; i++) {
	            if (players_ar[i]["fp"] == "GK" && filter_squads()) {
	                if (!(players_ar[i]["age"] < age_min || players_ar[i]["age"] > age_max)) {
	                    construct_tr(players_ar[i], z, true);
	                    z++;
	                }
	            }
	        }
	    }
	    $e("sq").innerHTML = "";
	    $e("sq").appendChild(myTable);
	    activate_player_links($(myTable).find("[player_link]"));
	    init_tooltip_by_elems($(myTable).find("[tooltip]"))
	    zebra();

	    };
		}

		var inject = document.createElement("script");

		inject.setAttribute("type", "text/javascript");
		inject.appendChild(document.createTextNode("(" + embed + ")()"));

		document.body.appendChild(inject);


		var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};

		loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

		    $.noConflict();
		    jQuery(document).ready(function($) {
		       // $('table.zebra th:eq(0)').click();
		  });
		});
		
		}
		else if (check_statpage != -1) {
		}
		
		else {
		
		counttables = document.getElementsByTagName("table").length;
		//alert (counttables)
		var c = 0;
		
		if (counttables == 3) {
			aux = document.getElementsByTagName("table")[1]; // holt die gesamte Tabelle
		}
		else {
			aux = document.getElementsByTagName("table")[2]; // holt die gesamte Tabelle
		}
		auxx = document.getElementsByTagName("table")[0]; // holt die gesamte Tabelle		
		pos_td = document.getElementsByTagName("strong")[1]; // holt die gesamte Tabelle
		auxspan = document.getElementsByTagName("span")[28]; // holt die gesamte Tabelle
		aux2 = document.getElementsByTagName("p")[0]; // holt die gesamte Tabelle
		aux3 = document.getElementsByTagName("p")[1]; // holt die gesamte Tabelle
		aux4 = document.getElementsByTagName("p")[2]; // holt die gesamte Tabelle
		
		if (old_skills == "yes") {
		
		var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};

		loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function () {

		$.noConflict();
		jQuery(document).ready(function ($) {

    // Destination table
    var newskills =
      '<table id="new_skill_table">' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
      '</table>';

    // Hide current skills, insert new skills
    $('table.skill_table').toggle();
    $('table.skill_table').after(newskills);

    // Arrays for skill data
    var attributeNames = new Array();
    var attributeValues = new Array();

    // Load skill data
    $('table.skill_table tr th:nth-child(1)').each(function (index) {
      storeData($(this));
    });

    $('table.skill_table tr th:nth-child(3)').each(function (index) {
      storeData($(this));
    });

    // Inject first row of attributes
    $.each(attributeNames, function (index) {
      $('table#new_skill_table tr:eq(0) td:eq(' + index + ')').html(attributeNames[index].substr(0, 3));
      $('table#new_skill_table tr:eq(1) td:eq(' + index + ')').html(attributeValues[index]);
    });

    // Inject second row of attributes (14 attributes for non-goalies)
    if (attributeNames.length == 14) {
      $.each(attributeNames.slice(7), function (index) {
        $('table#new_skill_table tr:eq(2) td:eq(' + index + ')').html(attributeNames[index + 7].substr(0, 3));
        $('table#new_skill_table tr:eq(3) td:eq(' + index + ')').html(attributeValues[index + 7]);
      });
    }
    else {
      $.each(attributeNames.slice(7), function (index) {
        $('table#new_skill_table tr:eq(2) td:eq(' + (index + 3) + ')').html(attributeNames[index + 7].substr(0, 3));
        $('table#new_skill_table tr:eq(3) td:eq(' + (index + 3) + ')').html(attributeValues[index + 7]);
      });
    }

    // Format new skills
    $('table#new_skill_table tr td').css('text-align', 'center');
    $('table#new_skill_table tr td').css('width', '14.2%');
    $('table#new_skill_table tr:nth-child(even)').css('background-color', '#649024');
    $('table#new_skill_table tr td img').css('margin-bottom', '4px');
	$('table#new_skill_table tr:eq(0) td').css('font-weight', 'bold');
	$('table#new_skill_table tr:eq(2) td').css('font-weight', 'bold');
	$('table#new_skill_table tr td:contains("18")').html('<img src="http://www.patrick-meurer.de/tm/bronze_star.png">');
	
	$('span.gk:contains("Goalkeeper")').html('<span class="gk" style="font-size: 1em;">GK </span>');
	$('span.gk:contains("Torhuter")').html('<span class="gk" style="font-size: 1em;">GK </span>');
	$('span.d:contains("Defender")').html('<span class="def" style="font-size: 1em;">D </span>');
	$('span.dm:contains("Defensive Midfielder")').html('<span class="dmid" style="font-size: 1em;">DM </span>');
	$('span.m:contains("Midfielder")').html('<span class="mid" style="font-size: 1em;">M </span>');
	$('span.om:contains("Offensive Midfielder")').html('<span class="omid" style="font-size: 1em;">OM </span>');
	$('span.f:contains("Forward")').html('<span class="fc" style="font-size: 1em;">F </span>');
	$('span.side:contains("Left")').html('<span class="left" style="font-size: 1em;">L</span>');
	$('span.side:contains("Center")').html('<span class="center" style="font-size: 1em;">C</span>');
	$('span.side:contains("Right")').html('<span class="right" style="font-size: 1em;">R</span>');
	
	// Format recommendation stars
    $('table.info_table tr td img').css('margin-bottom', '3px');
    $('table.info_table tr td img.flag').css('margin-bottom', '1px');

    // Show player details by default
    if (!$("#player_info").is(":visible")) {
      $("#player_info_arrow").click();
    }
    setClubList();

    // Store attributes to arrays
    function storeData(attribute) {

      // Only store attributes with values
      if (attribute.html() != '') {
        attributeNames.push(attribute.html());
        attributeValues.push(attribute.next().html());
      }
    }

    function sleep(ms) {
      var dt = new Date();
      dt.setTime(dt.getTime() + ms);
      while (new Date().getTime() < dt.getTime());
    }

    function setClubList() {
      // Show clubs for every line of history
      var lastClub;
      $('table.history_table div.club_name').each(function (index) {
        var currentClub = $(this).html();

        // Replace club name on dash, store club name otherwise
        if (currentClub == '-') {
          $(this).html(lastClub);
        }
        else {
          lastClub = currentClub;
        }
      });
    }
  });
});
			
	}
	else {
	
	}

	asi_check = auxx.getElementsByTagName("tr")[6].getElementsByTagName("td")[0].innerHTML;
	//alert(asi_check.search("pics"))
	if (asi_check.search("pics") != -1) {
		var zeile = 0
		var skillindex_yes = 0
	}
	else {
	
	if ( !isNaN( parseFloat(asi_check) ) ) { // ist eine Zahl
	//asi_check = asi_check.search(",") 
	//if (asi_check != -1) {
		var zeile = 0
		var skillindex_yes = 1
	}
	else {
		var zeile = 0
		var skillindex_yes = 0
	}
	}
	//	var asi = asi_check.getElementsByTagName("span")[0].innerHTML;
		
		
// fuer jeden Skill muss so geprueft werden, ob ein img-Tag oder ein span-Tag innerhalb der tabellenzelle vorliegt
	
//Strength
stae_td = aux.getElementsByTagName("tr")[zeile].getElementsByTagName("td")[0];

if(stae_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var stae = stae_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + stae)
}
else if(stae_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var stae = stae_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + stae)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var stae = aux.rows[zeile].cells[1].innerHTML;
//alert ("normal " + stae)
}
//Stamina
kon_td = aux.getElementsByTagName("tr")[zeile+1].getElementsByTagName("td")[0];

if(kon_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var kon = kon_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + kon)
}
else if(kon_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var kon = kon_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + kon)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var kon = aux.rows[zeile+1].cells[1].innerHTML;
//alert ("normal " + kon)
}

//Pace
ges_td = aux.getElementsByTagName("tr")[zeile+2].getElementsByTagName("td")[0];

if(ges_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var ges = ges_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + ges)
}
else if(ges_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var ges = ges_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + ges)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var ges = aux.rows[zeile+2].cells[1].innerHTML;
//alert ("normal " + ges)
}

//Marking
man_td = aux.getElementsByTagName("tr")[zeile+3].getElementsByTagName("td")[0];

if(man_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var man = man_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + man)
}
else if(man_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var man = man_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + man)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var man = aux.rows[zeile+3].cells[1].innerHTML;
//alert ("normal " + man)
}

//Tackling
zwe_td = aux.getElementsByTagName("tr")[zeile+4].getElementsByTagName("td")[0];

if(zwe_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var zwe = zwe_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + zwe)
}
else if(zwe_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var zwe = zwe_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + zwe)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var zwe = aux.rows[zeile+4].cells[1].innerHTML;
//alert ("normal " + zwe)
}

//Workrate
lau_td = aux.getElementsByTagName("tr")[zeile+5].getElementsByTagName("td")[0];

if(lau_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var lau = lau_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + lau)
}
else if(lau_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var lau = lau_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + lau)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var lau = aux.rows[zeile+5].cells[1].innerHTML;
//alert ("normal " + lau)
}

//Positioning
ste_td = aux.getElementsByTagName("tr")[zeile+6].getElementsByTagName("td")[0];

if(ste_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var ste = ste_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + ste)
}
else if(ste_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var ste = ste_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + ste)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var ste = aux.rows[zeile+6].cells[1].innerHTML;
//alert ("normal " + ste)
}

//Passing
pass_td = aux.getElementsByTagName("tr")[zeile].getElementsByTagName("td")[1];

if(pass_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var pass = pass_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + pass)
}
else if(pass_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var pass = pass_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + pass)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var pass = aux.rows[zeile].cells[3].innerHTML;
//alert ("normal " + pass)
}

//Crossing
fla_td = aux.getElementsByTagName("tr")[zeile+1].getElementsByTagName("td")[1];

if(fla_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var fla = fla_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + fla)
}
else if(fla_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var fla = fla_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + fla)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var fla = aux.rows[zeile+1].cells[3].innerHTML;
//alert ("normal " + fla)
}

//Technique
tec_td = aux.getElementsByTagName("tr")[zeile+2].getElementsByTagName("td")[1];

if(tec_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var tec = tec_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + tec)
}
else if(tec_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var tec = tec_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + tec)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var tec = aux.rows[zeile+2].cells[3].innerHTML;
//alert ("normal " + tec)
}

//Heading
kop_td = aux.getElementsByTagName("tr")[zeile+3].getElementsByTagName("td")[1];

if(kop_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var kop = kop_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + kop)
}
else if(kop_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var kop = kop_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + kop)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var kop = aux.rows[zeile+3].cells[3].innerHTML;
//alert ("normal " + kop)
}

//Shooting
tor_td = aux.getElementsByTagName("tr")[zeile+4].getElementsByTagName("td")[1];

if(tor_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var tor = tor_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + tor)
}
else if(tor_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var tor = tor_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + tor)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var tor = aux.rows[zeile+4].cells[3].innerHTML;
//alert ("normal " + tor)
}

//Longshots
wei_td = aux.getElementsByTagName("tr")[zeile+5].getElementsByTagName("td")[1];

if(wei_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var wei = wei_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + wei)
}
else if(wei_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var wei = wei_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + wei)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var wei = aux.rows[zeile+5].cells[3].innerHTML;
//alert ("normal " + wei)
}

//Setpieces
sta_td = aux.getElementsByTagName("tr")[zeile+6].getElementsByTagName("td")[1];

if(sta_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
{
var sta = sta_td.getElementsByTagName("span")[0].innerHTML;
//alert ("span " + sta)
}
else if(sta_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
var sta = sta_td.getElementsByTagName("img")[0].getAttribute("alt");
//alert ("img " + sta)
}
else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
var sta = aux.rows[zeile+6].cells[3].innerHTML;
//alert ("normal " + sta)
}



//LP, XP, ASI und Gehalt auslesen
		
		//Playername
		var name = document.title; // holt den Titel-Tag
		name = name.substring(0,name.length-20);
		//alert(name)
		
		var name_url = name.replace(" ","-");
		//alert(name_url)
		
		//PlayerID
		var id = document.URL;
		//http://trophymanager.com/players/22479427
		//http://trophymanager.com/players/22479427/Apsel-%27Gold%27-Gronan/
		id = id.replace("http://trophymanager.com/players/","");
		//alert(id.length)
		
		if (id.length > 10) {
			id = id.substring(0,id.length-1);
			id = id.replace(name_url,"");
			id = id.replace("/","");
			//alert(id)
		}
		else {
			id = id.replace("/","");
			//alert(id)
		}
		
		
		//alert(id)
		
	//	id_td = auxspan.getAttribute("onclick");
	
/*
	var id_count = document.getElementsByTagName("span").length;
	alert(id_count)
	
	if (id_count == 20) {
		//var id = document.getElementsByTagName("span")[9].getAttribute("onclick");
		//id = id.substring(27,id.length-2);
	}
	else if (id_count == 21) {
		var id = document.getElementsByTagName("span")[10].getAttribute("onclick");
		id = id.substring(27,id.length-2);
	}
	else if (id_count == 22) {
		var id = document.getElementsByTagName("span")[11].getAttribute("onclick");
		id = id.substring(27,id.length-2);
	}
	else if (id_count == 24) {
		var id = document.getElementsByTagName("span")[13].getAttribute("onclick");
		id = id.substring(27,id.length-2);
	}
		else if (id_count == 25) {
		var id = document.getElementsByTagName("span")[13].getAttribute("onclick");
		id = id.substring(27,id.length-2);
	}
		else if (id_count == 29) {
		var id = document.getElementsByTagName("span")[17].getAttribute("onclick");
		id = id.substring(27,id.length-2);
	}
	else {
		var id = document.getElementsByTagName("span")[14].getAttribute("onclick");
		id = id.substring(27,id.length-2);	
	}
	alert(id)		
*/
		//Country
		var country = document.getElementsByTagName("img")[1].getAttribute("src");
		
		country = country.replace("/pics/flags/gradient/","");
		country = country.substring(0,2);
		//alert(country)
		
/*			switch (country) {
		
				case ("/pics/flags/gradient/de.png"):
					country = "Germany";
					alert(country)
				break;

				default:
					country = "Country not included yet";
					alert(country)
			}
*/		
		verein_td = auxx.getElementsByTagName("tr")[1].getElementsByTagName("td")[0];
		var verein = verein_td.getElementsByTagName("a")[0].innerHTML;
		
		var clubid = verein_td.getElementsByTagName("a")[0].getAttribute("href");
		clubid = clubid.substring(6,clubid.length-1);
		//alert(verein)
		//alert(clubid)

		//Routine
		var rou = auxx.rows[zeile+skillindex_yes+7].cells[1].innerHTML;
		//alert(rou)

		//Wage
		gehalt_td = auxx.getElementsByTagName("tr")[4].getElementsByTagName("td")[0];
		var gehalt = gehalt_td.getElementsByTagName("span")[0].innerHTML;
		gehalt = gehalt.replace(",", "");
		gehalt = gehalt.replace(",", "");
		//alert(gehalt)		
		
		asi = auxx.getElementsByTagName("tr")[6].getElementsByTagName("td")[0];
		var asi = asi.innerHTML;
		asi = asi.replace(",", ".");
		asi = asi.replace(".", "");
		//alert(asi)
		
		var status = auxx.rows[zeile+skillindex_yes+6].cells[1].innerHTML;
		//alert(status)
		if (status == '<img src="/pics/mini_green_check.png"> ') {
		status = "Gesund";
		//alert(status)
		}
		//Verletzungen
		else if(status == '1 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Verletzung: ' + status;
		}
		else if(status == '2 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Verletzung: ' + status;
		}
		else if(status == '3 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Verletzung: ' + status;
		}
		else if(status == '4 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Verletzung: ' + status;
		}
		else if(status == '5 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Verletzung: ' + status;
		}
		else if(status == '6 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Verletzung: ' + status;
		}
		else if(status == '7 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Verletzung: ' + status;
		}
		else if(status == '8 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Verletzung: ' + status;
		}
		else if(status == '9 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Verletzung: ' + status;
		}
		else if(status == '10 <img src="/pics/icons/injury.gif"> '){
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,2);
				status = 'Verletzung: ' + status;
		}
		//Sperren
		else if(status == '1 <img src="/pics/icons/red_card.gif"> ') {
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Sperre: ' + status;
		}
		else if(status == '2 <img src="/pics/icons/red_card.gif"> ') {
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Sperre: ' + status;
		}
		else if(status == '3 <img src="/pics/icons/red_card.gif"> ') {
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'Sperre: ' + status;
		}
		else if(status == ' <img src="/pics/icons/yellow_card.gif" tooltip="Gefahr einer Sperre"> ') {
				status = status.replace("&nbsp;", "");
				status = status.replace("&nbsp;", "");
				status = status.substring(0,1);
				status = 'GelbeKarte';
				//alert(status)
		}
		else if(status == '<img src="/pics/mini_green_check.png"> <img src="/pics/icons/retire.gif">') {
				status = 'Gesund - Karriereende';
		}

/*		alter_td = auxx.getElementsByTagName("tr")[2].getElementsByTagName("td")[0];		
		var alter = auxx.rows[2].cells[1].innerHTML;
			alter = alter.substring(24,alter.length-70);
			alter_year = alter.substring(0,2);
			alter_month = alter.substring(3,alter.length);
			alter_month = alter_month.replace("Jahre","");
			alter_month = alter_month.replace("Monate","");
			alter_month = alter_month.replace(/ /i,"");
			alter = alter_year + "-" + alter_month;
*/			
		var alter = auxx.getElementsByTagName("tr")[2].getElementsByTagName("td")[0].innerHTML;
		alter = alter.substring(0,2);
		//alert(alter)
		
		//Position
		var pos_zweinull = document.getElementsByTagName("strong")[1].getElementsByTagName("span"); // holt alle Spanelemente
		var poslength = pos_zweinull.length;
		//alert (poslength)
		if (poslength == 2) {
			var pos = document.getElementsByTagName("strong")[1].getElementsByTagName("span")[1].innerHTML;
			//alert(pos)
		}
		else if (poslength == 3) {
			var pos1 = document.getElementsByTagName("strong")[1].getElementsByTagName("span")[1].innerHTML;
			var pos2 = document.getElementsByTagName("strong")[1].getElementsByTagName("span")[2].innerHTML;
			pos = pos1 + pos2;
			//alert(pos)
		}
		else if (poslength == 5) {
			var pos1 = document.getElementsByTagName("strong")[1].getElementsByTagName("span")[1].innerHTML;
			var pos2 = document.getElementsByTagName("strong")[1].getElementsByTagName("span")[2].innerHTML;
			var pos3 = document.getElementsByTagName("strong")[1].getElementsByTagName("span")[3].innerHTML;
			var pos4 = document.getElementsByTagName("strong")[1].getElementsByTagName("span")[4].innerHTML;
			pos = pos1 + pos2 + pos3 + pos4;
			//alert(pos)
		}

		switch (pos) {
		
		//日本語ここから------------------------------------------------------------
		
		//id
		case "Penjaga Gawang":	pos = "GK"; break;
		
		case "Bek Kiri": pos = "D L"; break;
		case "Bek Tengah": pos = "D C"; break;
		case "Bek Kanan": pos = "D R"; break;
		
		case "Bek Tengah/Kanan": pos = "D CR"; break;
		case "Bek Kanan/Tengah": pos = "D RC"; break;
		case "Bek Kiri/Kanan": pos = "D LR"; break;
		case "Bek Kanan/Kiri": pos = "D RL"; break;
		case "Bek Kiri/Tengah": pos = "D LC"; break;
		case "Bek Tengah/Kiri": pos = "D CL"; break;
		
		case "Bek/Gelandang Bertahan Kiri": pos = "D/DM L"; break;
		case "Gelandang Bertahan/Bek Kiri": pos = "DM/D L"; break;
		case "Bek/Gelandang Bertahan Kanan": pos = "D/DM R"; break;
		case "Gelandang Bertahan/Bek Kanan": pos = "DM/D R"; break;
		case "Bek/Gelandang Bertahan Tengah": pos = "D/DM C"; break;
		case "Gelandang Bertahan/Bek Tengah": pos = "DM/D C"; break;
		
		case "Bek/Gelandang Kiri": pos = "D/M L"; break;
		case "Gelandang/Bek Kiri": pos = "M/D L"; break;
		case "Bek/Gelandang Kanan": pos = "D/M R"; break;
		case "Gelandang/Bek Kanan": pos = "M/D R"; break;
		case "Bek/Gelandang Tengah": pos = "D/M C"; break;
		case "Gelandang/Bek Tengah": pos = "M/D C"; break;
		
		case "Bek/Gelandang Serang Kiri": pos = "D/OM L"; break;
		case "Gelandang Serang/Bek Kiri": pos = "OM/D L"; break;
		case "Bek/Gelandang Serang Kanan": pos = "D/OM R"; break;
		case "Gelandang Serang/Bek Kanan": pos = "OM/D R"; break;
		case "Bek/Gelandang Serang Tengah": pos = "D/OM C"; break;
		case "Gelandang Serang/Bek Tengah": pos = "OM/D C"; break;
		
		case "Gelandang Bertahan Kiri": pos = "DM L"; break;
		case "Gelandang Bertahan Tengah": pos = "DM C"; break;
		case "Gelandang Bertahan Kanan": pos = "DM R"; break;
		
		case "Gelandang Bertahan Kiri/Tengah": pos = "DM LC"; break;
		case "Gelandang Bertahan Tengah/Kiri": pos = "DM CL"; break;
		case "Gelandang Bertahan Tengah/Kanan": pos = "DM CR"; break;
		case "Gelandang Bertahan Kanan/Tengah": pos = "DM RC"; break;
		case "Gelandang Bertahan Kiri/Kanan": pos = "DM LR"; break;
		case "Gelandang Bertahan Kanan/Kiri": pos = "DM RL"; break;
		
		case "Gelandang Bertahan/Gelandang Kiri": pos = "DM/M L"; break;
		case "Gelandang/Gelandang Bertahan Kiri": pos = "M/DM L"; break;
		case "Gelandang Bertahan/Gelandang Tengah": pos = "DM/M C"; break;
		case "Gelandang/Gelandang Bertahan Tengah": pos = "M/DM C"; break;
		case "Gelandang Bertahan/Gelandang Kanan": pos = "DM/M R"; break;
		case "Gelandang/Gelandang Bertahan Kanan": pos = "M/DM R"; break;
		
		case "Gelandang Bertahan/Gelandang Serang Kiri": pos = "DM/OM L"; break;
		case "Gelandang Serang/Gelandang Bertahan Kiri": pos = "OM/DM L"; break;
		case "Gelandang Bertahan/Gelandang Serang Tengah": pos = "DM/OM C"; break;
		case "Gelandang Serang/Gelandang Bertahan Tengah": pos = "OM/DM C"; break;
		case "Gelandang Bertahan/Gelandang Serang Kanan": pos = "DM/OM R"; break;
		case "Gelandang Serang/Gelandang Bertahan Kanan": pos = "OM/DM R"; break;
		
		case "Gelandang Kiri": pos = "M L"; break;
		case "Gelandang Tengah": pos = "M C"; break;
		case "Gelandang Kanan": pos = "M R"; break;
		
		case "Gelandang Kiri/Tengah": pos = "M LC"; break;
		case "Gelandang Tengah/Kiri": pos = "M CL"; break;
		case "Gelandang Kiri/Kanan": pos = "M LR"; break;
		case "Gelandang Kanan/Kiri": pos = "M RL"; break;
		case "Gelandang Tengah/Kanan": pos = "M CR"; break;
		case "Gelandang Kanan/Tengah": pos = "M RC"; break;
		
		case "Gelandang/Gelandang Serang Kiri": pos = "M/OM L"; break;
		case "Gelandang Serang/Gelandang Kiri": pos = "OM/M L"; break;
		case "Gelandang/Gelandang Serang Tengah": pos = "M/OM C"; break;
		case "Gelandang Serang/Gelandang Tengah": pos = "OM/M C"; break;
		case "Gelandang/Gelandang Serang Kanan": pos = "M/OM R"; break;
		case "Gelandang Serang/Gelandang Kanan": pos = "OM/M R"; break;
		
		case "Gelandang Serang Kiri": pos = "OM L"; break;
		case "Gelandang Serang Tengah": pos = "OM C"; break;
		case "Gelandang Serang Kanan": pos = "OM R"; break;
		
		case "Gelandang Serang Kiri/Tengah": pos = "OM LC"; break;
		case "Gelandang Serang Tengah/Kiri": pos = "OM CL"; break;
		case "Gelandang Serang Tengah/Kanan": pos = "OM CR"; break;
		case "Gelandang Serang Kanan/Tengah": pos = "OM RC"; break;
		case "Gelandang Serang Kiri/Kanan": pos = "OM LR"; break
		case "Gelandang Serang Kanan/Kiri": pos = "OM RL"; break
		
		case "Bek Kiri/Penyerang": pos = "D L, F"; break;
		case "Penyerang/Bek Kiri": pos = "F, D L"; break;
		case "Bek Tengah/Penyerang": pos = "D C, F"; break;
		case "Penyerang/Bek Tengah": pos = "F, D C"; break;
		case "Bek Kanan/Penyerang": pos = "D R, F"; break;
		case "Penyerang/Bek Kanan": pos = "F, D R"; break;
		
		case "Gelandang Serang Kiri/Penyerang": pos = "OM L, F"; break;
		case "Penyerang/Gelandang Serang Kiri": pos = "F, OM L"; break;
		case "Gelandang Serang Tengah/Penyerang": pos = "OM C, F"; break;
		case "Penyerang/Gelandang Serang Tengah": pos = "F, OM C"; break;
		case "Gelandang Serang Kanan/Penyerang": pos = "OM R, F"; break;
		case "Penyerang/Gelandang Serang Kanan": pos = "F, OM R"; break;
		
		case "Gelandang Bertahan Kiri/Penyerang": pos = "DM L, F"; break;
		case "Penyerang/Gelandang Bertahan Kiri": pos = "F, DM L"; break;
		case "Gelandang Bertahan Tengah/Penyerang": pos = "DM C, F"; break;
		case "Penyerang/Gelandang Bertahan Tengah": pos = "F, DM C"; break;
		case "Gelandang Bertahan Kanan/Penyerang": pos = "DM R, F"; break;
		case "Penyerang/Gelandang Bertahan Kanan": pos = "F, DM R"; break;
		
		case "Gelandang Kiri/Penyerang": pos = "M L, F"; break;
		case "Penyerang/Gelandang Kiri": pos = "F, M L"; break;
		case "Gelandang Tengah/Penyerang": pos = "M C, F"; break;
		case "Penyerang/Gelandang Tengah": pos = "F, M C"; break;
		case "Gelandang Kanan/Penyerang": pos = "M R, F"; break;
		case "Penyerang/Gelandang Kanan": pos = "F, M R"; break;
		
		case "Penyerang": pos = "F"; break;
		
		
		//JP
		case "ゴールキーパー":	pos = "GK"; break;
		
		case "ディフェンダー 左": pos = "D L"; break;
		case "ディフェンダー 中央": pos = "D C"; break;
		case "ディフェンダー 右": pos = "D R"; break;
		
		case "ディフェンダー 中央/右": pos = "D CR"; break;
		case "ディフェンダー 右/中央": pos = "D RC"; break;
		case "ディフェンダー 左/右": pos = "D LR"; break;
		case "ディフェンダー 右/左": pos = "D RL"; break;
		case "ディフェンダー 左/中央": pos = "D LC"; break;
		case "ディフェンダー 中央/左": pos = "D CL"; break;
		
		case "ディフェンダー/守備的ミッドフィルダー 左": pos = "D/DM L"; break;
		case "守備的ミッドフィルダー/ディフェンダー 左": pos = "DM/D L"; break;
		case "ディフェンダー/守備的ミッドフィルダー 右": pos = "D/DM R"; break;
		case "守備的ミッドフィルダー/ディフェンダー 右": pos = "DM/D R"; break;
		case "ディフェンダー/守備的ミッドフィルダー 中央": pos = "D/DM C"; break;
		case "守備的ミッドフィルダー/ディフェンダー 中央": pos = "DM/D C"; break;
		
		case "ディフェンダー/ミッドフィルダー 左": pos = "D/M L"; break;
		case "ミッドフィルダー/ディフェンダー 左": pos = "M/D L"; break;
		case "ディフェンダー/ミッドフィルダー 右": pos = "D/M R"; break;
		case "ミッドフィルダー/ディフェンダー 右": pos = "M/D R"; break;
		case "ディフェンダー/ミッドフィルダー 中央": pos = "D/M C"; break;
		case "ミッドフィルダー/ディフェンダー 中央": pos = "M/D C"; break;
		
		case "ディフェンダー/攻撃的ミッドフィルダー 左": pos = "D/OM L"; break;
		case "攻撃的ミッドフィルダー/ディフェンダー 左": pos = "OM/D L"; break;
		case "ディフェンダー/攻撃的ミッドフィルダー 右": pos = "D/OM R"; break;
		case "攻撃的ミッドフィルダー/ディフェンダー 右": pos = "OM/D R"; break;
		case "ディフェンダー/攻撃的ミッドフィルダー 中央": pos = "D/OM C"; break;
		case "攻撃的ミッドフィルダー/ディフェンダー 中央": pos = "OM/D C"; break;
		
		case "守備的ミッドフィルダー 左": pos = "DM L"; break;
		case "守備的ミッドフィルダー 中央": pos = "DM C"; break;
		case "守備的ミッドフィルダー 右": pos = "DM R"; break;
		
		case "守備的ミッドフィルダー 左/中央": pos = "DM LC"; break;
		case "守備的ミッドフィルダー 中央/左": pos = "DM CL"; break;
		case "守備的ミッドフィルダー 中央/右": pos = "DM CR"; break;
		case "守備的ミッドフィルダー 右/中央": pos = "DM RC"; break;
		case "守備的ミッドフィルダー 左/右": pos = "DM LR"; break;
		case "守備的ミッドフィルダー 右/左": pos = "DM RL"; break;
		
		case "守備的ミッドフィルダー/ミッドフィルダー 左": pos = "DM/M L"; break;
		case "ミッドフィルダー/守備的ミッドフィルダー 左": pos = "M/DM L"; break;
		case "守備的ミッドフィルダー/ミッドフィルダー 中央": pos = "DM/M C"; break;
		case "ミッドフィルダー/守備的ミッドフィルダー 中央": pos = "M/DM C"; break;
		case "守備的ミッドフィルダー/ミッドフィルダー 右": pos = "DM/M R"; break;
		case "ミッドフィルダー/守備的ミッドフィルダー 右": pos = "M/DM R"; break;
		
		case "守備的ミッドフィルダー/攻撃的ミッドフィルダー 左": pos = "DM/OM L"; break;
		case "攻撃的ミッドフィルダー/守備的ミッドフィルダー 左": pos = "OM/DM L"; break;
		case "守備的ミッドフィルダー/攻撃的ミッドフィルダー 中央": pos = "DM/OM C"; break;
		case "攻撃的ミッドフィルダー/守備的ミッドフィルダー 中央": pos = "OM/DM C"; break;
		case "守備的ミッドフィルダー/攻撃的ミッドフィルダー 右": pos = "DM/OM R"; break;
		case "攻撃的ミッドフィルダー/守備的ミッドフィルダー 右": pos = "OM/DM R"; break;
		
		case "ミッドフィルダー 左": pos = "M L"; break;
		case "ミッドフィルダー 中央": pos = "M C"; break;
		case "ミッドフィルダー 右": pos = "M R"; break;
		
		case "ミッドフィルダー 左/中央": pos = "M LC"; break;
		case "ミッドフィルダー 中央/左": pos = "M CL"; break;
		case "ミッドフィルダー 左/右": pos = "M LR"; break;
		case "ミッドフィルダー 右/左": pos = "M RL"; break;
		case "ミッドフィルダー 中央/右": pos = "M CR"; break;
		case "ミッドフィルダー 右/中央": pos = "M RC"; break;
		
		case "ミッドフィルダー/攻撃的ミッドフィルダー 左": pos = "M/OM L"; break;
		case "攻撃的ミッドフィルダー/ミッドフィルダー 左": pos = "OM/M L"; break;
		case "ミッドフィルダー/攻撃的ミッドフィルダー 中央": pos = "M/OM C"; break;
		case "攻撃的ミッドフィルダー/ミッドフィルダー 中央": pos = "OM/M C"; break;
		case "ミッドフィルダー/攻撃的ミッドフィルダー 右": pos = "M/OM R"; break;
		case "攻撃的ミッドフィルダー/ミッドフィルダー 右": pos = "OM/M R"; break;
		
		case "攻撃的ミッドフィルダー 左": pos = "OM L"; break;
		case "攻撃的ミッドフィルダー 中央": pos = "OM C"; break;
		case "攻撃的ミッドフィルダー 右": pos = "OM R"; break;
		
		case "攻撃的ミッドフィルダー 左/中央": pos = "OM LC"; break;
		case "攻撃的ミッドフィルダー 中央/左": pos = "OM CL"; break;
		case "攻撃的ミッドフィルダー 中央/右": pos = "OM CR"; break;
		case "攻撃的ミッドフィルダー 右/中央": pos = "OM RC"; break;
		case "攻撃的ミッドフィルダー 左/右": pos = "OM LR"; break
		case "攻撃的ミッドフィルダー 右/左": pos = "OM RL"; break
		
		case "ディフェンダー 左/フォワード": pos = "D L, F"; break;
		case "フォワード/ディフェンダー 左": pos = "F, D L"; break;
		case "ディフェンダー 中央/フォワード": pos = "D C, F"; break;
		case "フォワード/ディフェンダー 中央": pos = "F, D C"; break;
		case "ディフェンダー 右/フォワード": pos = "D R, F"; break;
		case "フォワード/ディフェンダー 右": pos = "F, D R"; break;
		
		case "攻撃的ミッドフィルダー 左/フォワード": pos = "OM L, F"; break;
		case "フォワード/攻撃的ミッドフィルダー 左": pos = "F, OM L"; break;
		case "攻撃的ミッドフィルダー 中央/フォワード": pos = "OM C, F"; break;
		case "フォワード/攻撃的ミッドフィルダー 中央": pos = "F, OM C"; break;
		case "攻撃的ミッドフィルダー 右/フォワード": pos = "OM R, F"; break;
		case "フォワード/攻撃的ミッドフィルダー 右": pos = "F, OM R"; break;
		
		case "守備的ミッドフィルダー 左/フォワード": pos = "DM L, F"; break;
		case "フォワード/守備的ミッドフィルダー 左": pos = "F, DM L"; break;
		case "守備的ミッドフィルダー 中央/フォワード": pos = "DM C, F"; break;
		case "フォワード/守備的ミッドフィルダー 中央": pos = "F, DM C"; break;
		case "守備的ミッドフィルダー 右/フォワード": pos = "DM R, F"; break;
		case "フォワード/守備的ミッドフィルダー 右": pos = "F, DM R"; break;
		
		case "ミッドフィルダー 左/フォワード": pos = "M L, F"; break;
		case "フォワード/ミッドフィルダー 左": pos = "F, M L"; break;
		case "ミッドフィルダー 中央/フォワード": pos = "M C, F"; break;
		case "フォワード/ミッドフィルダー 中央": pos = "F, M C"; break;
		case "ミッドフィルダー 右/フォワード": pos = "M R, F"; break;
		case "フォワード/ミッドフィルダー 右": pos = "F, M R"; break;
		
		case "フォワード": pos = "F"; break;
		
		// ここまで----------------------------------------------------------------------
		
		
		//AR
		case "????":	pos = "GK"; break;
		case "????? ????": pos = "D L"; break;
		case "????? ?????": pos = "D C"; break;
		case "????? ????": pos = "D R"; break;
		case "????? ?????/????": pos = "D CR"; break;
		case "????? ????/????": pos = "D LR"; break;
		case "????? ????/?????": pos = "D LC"; break;
		case "?????/??? ????? ????": pos = "D/DM L"; break;
		case "?????/??? ????? ????": pos = "D/DM R"; break;
		case "?????/??? ????? ?????": pos = "D/DM C"; break;
		case "??? ????? ????": pos = "DM L"; break;
		case "??? ????? ?????": pos = "DM C"; break;
		case "??? ????? ????": pos = "DM R"; break;
		case "??? ????? ????/?????": pos = "DM LC"; break;
		case "??? ????? ?????/????": pos = "DM CR"; break;
		case "??? ????? ????/????": pos = "DM LR"; break;
		case "??? ?????/??? ????": pos = "DM/M L"; break;
		case "??? ?????/??? ?????": pos = "DM/M C"; break;
		case "??? ?????/??? ????": pos = "DM/M R"; break;
		case "??? ????": pos = "M L"; break;
		case "??? ?????": pos = "M C"; break;
		case "??? ????": pos = "M R"; break;
		case "??? ????/?????": pos = "M LC"; break;
		case "??? ????/????": pos = "M LR"; break;
		case "??? ?????/????": pos = "M CR"; break;
		case "???/??? ????? ????": pos = "M/OM L"; break;
		case "???/??? ????? ?????": pos = "M/OM C"; break;
		case "???/??? ????? ????": pos = "M/OM R"; break;
		case "??? ????? ????": pos = "OM L"; break;
		case "??? ????? ?????": pos = "OM C"; break;
		case "??? ????? ????": pos = "OM R"; break;
		case "??? ????? ????/?????": pos = "OM LC"; break;
		case "??? ????? ?????/????": pos = "OM CR"; break;
		case "??? ????? ????/????": pos = "OM LR"; break
		case "??? ????? ????/?????": pos = "OM L, F"; break;
		case "??? ????? ?????/?????": pos = "OM C, F"; break;
		case "??? ????? ????/?????": pos = "OM R, F"; break;
		case "?????": pos = "F"; break;

		//CR
		case "Obrambeni Lijevo": pos = "D L"; break;
		case "Obrambeni Sredina": pos = "D C"; break;
		case "Obrambeni Desno": pos = "D R"; break;
		case "Obrambeni Sredina/Desno": pos = "D CR"; break;
		case "Obrambeni Lijevo/Desno": pos = "D LR"; break;
		case "Obrambeni Lijevo/Sredina": pos = "D LC"; break;
		case "Obrambeni/Defanzivni Vezni Lijevo": pos = "D/DM L"; break;
		case "Obrambeni/Defanzivni Vezni Desno": pos = "D/DM R"; break;
		case "Obrambeni/Defanzivni Vezni Sredina": pos = "D/DM C"; break;
		case "Defanzivni Vezni Lijevo": pos = "DM L"; break;
		case "Defanzivni Vezni Sredina": pos = "DM C"; break;
		case "Defanzivni Vezni Desno": pos = "DM R"; break;
		case "Defanzivni Vezni Lijevo/Sredina": pos = "DM LC"; break;
		case "Defanzivni Vezni Sredina/Desno": pos = "DM CR"; break;
		case "Defanzivni Vezni Lijevo/Desno": pos = "DM LR"; break;
		case "Defanzivni Vezni/Vezni Lijevo": pos = "DM/M L"; break;
		case "Defanzivni Vezni/Vezni Sredina": pos = "DM/M C"; break;
		case "Defanzivni Vezni/Vezni Desno": pos = "DM/M R"; break;
		case "Vezni Lijevo": pos = "M L"; break;
		case "Vezni Sredina": pos = "M C"; break;
		case "Vezni Desno": pos = "M R"; break;
		case "Vezni Lijevo/Sredina": pos = "M LC"; break;
		case "Vezni Lijevo/Desno": pos = "M LR"; break;
		case "Vezni Sredina/Desno": pos = "M CR"; break;
		case "Vezni/Ofenzivni Vezni Lijevo": pos = "M/OM L"; break;
		case "Vezni/Ofenzivni Vezni Sredina": pos = "M/OM C"; break;
		case "Vezni/Ofenzivni Vezni Desno": pos = "M/OM R"; break;
		case "Ofenzivni Vezni Lijevo": pos = "OM L"; break;
		case "Ofenzivni Vezni Sredina": pos = "OM C"; break;
		case "Ofenzivni Vezni Desno": pos = "OM R"; break;
		case "Ofenzivni Vezni Lijevo/Sredina": pos = "OM LC"; break;
		case "Ofenzivni Vezni Sredina/Desno": pos = "OM CR"; break;
		case "Ofenzivni Vezni Lijevo/Desno": pos = "OM LR"; break
		case "Ofenzivni Vezni Lijevo/Napada?": pos = "OM L, F"; break;
		case "Ofenzivni Vezni Sredina/Napada?": pos = "OM C, F"; break;
		case "Ofenzivni Vezni Desno/Napada?": pos = "OM R, F"; break;
		case "Napada?": pos = "F"; break;
			
		//DA
		case "Malmand":	pos = "GK"; break;
		case "Forsvar Venstre": pos = "D L"; break;
		case "Forsvar Central": pos = "D C"; break;
		case "Forsvar Hojre": pos = "D R"; break;
		case "Forsvar Central/Hojre": pos = "D CR"; break;
		case "Forsvar Venstre/Hojre": pos = "D LR"; break;
		case "Forsvar Venstre/Central": pos = "D LC"; break;
		case "Forsvar/Defensiv Midtbane Venstre": pos = "D/DM L"; break;
		case "Forsvar/Defensiv Midtbane Hojre": pos = "D/DM R"; break;
		case "Forsvar/Defensiv Midtbane Central": pos = "D/DM C"; break;
		case "Defensiv Midtbane Venstre": pos = "DM L"; break;
		case "Defensiv Midtbane Central": pos = "DM C"; break;
		case "Defensiv Midtbane Hojre": pos = "DM R"; break;
		case "Defensiv Midtbane Venstre/Central": pos = "DM LC"; break;
		case "Defensiv Midtbane Central/Hojre": pos = "DM CR"; break;
		case "Defensiv Midtbane Venstre/Hojre": pos = "DM LR"; break;
		case "Defensiv Midtbane/Midtbane Venstre": pos = "DM/M L"; break;
		case "Defensiv Midtbane/Midtbane Central": pos = "DM/M C"; break;
		case "Defensiv Midtbane/Midtbane Hojre": pos = "DM/M R"; break;
		case "Midtbane Venstre": pos = "M L"; break;
		case "Midtbane Central": pos = "M C"; break;
		case "Midtbane Hojre": pos = "M R"; break;
		case "Midtbane Venstre/Central": pos = "M LC"; break;
		case "Midtbane Venstre/Hojre": pos = "M LR"; break;
		case "Midtbane Central/Hojre": pos = "M CR"; break;
		case "Midtbane/Offensiv Midtbane Venstre": pos = "M/OM L"; break;
		case "Midtbane/Offensiv Midtbane Central": pos = "M/OM C"; break;
		case "Midtbane/Offensiv Midtbane Hojre": pos = "M/OM R"; break;
		case "Offensiv Midtbane Venstre": pos = "OM L"; break;
		case "Offensiv Midtbane Central": pos = "OM C"; break;
		case "Offensiv Midtbane Hojre": pos = "OM R"; break;
		case "Offensiv Midtbane Venstre/Central": pos = "OM LC"; break;
		case "Offensiv Midtbane Central/Hojre": pos = "OM CR"; break;
		case "Offensiv Midtbane Venstre/Hojre": pos = "OM LR"; break
		case "Offensiv Midtbane Venstre/Angriber": pos = "OM L, F"; break;
		case "Offensiv Midtbane Central/Angriber": pos = "OM C, F"; break;
		case "Offensiv Midtbane Hojre/Angriber": pos = "OM R, F"; break;
		case "Angriber": pos = "F"; break;		
		
		//DE
		case "Torhuter":	pos = "GK"; break;
		case "Verteidiger Links": pos = "D L"; break;
		case "Verteidiger Zentral": pos = "D C"; break;
		case "Verteidiger Rechts": pos = "D R"; break;
		case "Verteidiger Zentral/Rechts": pos = "D CR"; break;
		case "Verteidiger Links/Rechts": pos = "D LR"; break;
		case "Verteidiger Links/Zentral": pos = "D LC"; break;
		case "Verteidiger/Defensiver Mittelfeldspieler Links": pos = "D/DM L"; break;
		case "Verteidiger/Defensiver Mittelfeldspieler Rechts": pos = "D/DM R"; break;
		case "Verteidiger/Defensiver Mittelfeldspieler Zentral": pos = "D/DM C"; break;
		case "Defensiver Mittelfeldspieler Links": pos = "DM L"; break;
		case "Defensiver Mittelfeldspieler Zentral": pos = "DM C"; break;
		case "Defensiver Mittelfeldspieler Rechts": pos = "DM R"; break;
		case "Defensiver Mittelfeldspieler Links/Zentral": pos = "DM LC"; break;
		case "Defensiver Mittelfeldspieler Zentral/Rechts": pos = "DM CR"; break;
		case "Defensiver Mittelfeldspieler Links/Rechts": pos = "DM LR"; break;
		case "Defensiver Mittelfeldspieler/Mittelfeldspieler Links": pos = "DM/M L"; break;
		case "Defensiver Mittelfeldspieler/Mittelfeldspieler Zentral": pos = "DM/M C"; break;
		case "Defensiver Mittelfeldspieler/Mittelfeldspieler Rechts": pos = "DM/M R"; break;
		case "Mittelfeldspieler Links": pos = "M L"; break;
		case "Mittelfeldspieler Zentral": pos = "M C"; break;
		case "Mittelfeldspieler Rechts": pos = "M R"; break;
		case "Mittelfeldspieler Links/Zentral": pos = "M LC"; break;
		case "Mittelfeldspieler Links/Rechts": pos = "M LR"; break;
		case "Mittelfeldspieler Zentral/Rechts": pos = "M CR"; break;
		case "Mittelfeldspieler/Offensiver Mittelfeldspieler Links": pos = "M/OM L"; break;
		case "Mittelfeldspieler/Offensiver Mittelfeldspieler Zentral": pos = "M/OM C"; break;
		case "Mittelfeldspieler/Offensiver Mittelfeldspieler Rechts": pos = "M/OM R"; break;
		case "Offensiver Mittelfeldspieler Links": pos = "OM L"; break;
		case "Offensiver Mittelfeldspieler Zentral": pos = "OM C"; break;
		case "Offensiver Mittelfeldspieler Rechts": pos = "OM R"; break;
		case "Offensiver Mittelfeldspieler Links/Zentral": pos = "OM LC"; break;
		case "Offensiver Mittelfeldspieler Zentral/Rechts": pos = "OM CR"; break;
		case "Offensiver Mittelfeldspieler Links/Rechts": pos = "OM LR"; break
		case "Offensiver Mittelfeldspieler Links/Sturmer": pos = "OM L, F"; break;
		case "Offensiver Mittelfeldspieler Zentral/Sturmer": pos = "OM C, F"; break;
		case "Offensiver Mittelfeldspieler Rechts/Sturmer": pos = "OM R, F"; break;
		case "Sturmer": pos = "F"; break;

		//EN
		case "Goalkeeper":	pos = "GK"; break;
		
		case "Defender Left": pos = "D L"; break;
		case "Defender Center": pos = "D C"; break;
		case "Defender Right": pos = "D R"; break;
		case "Defender Center/Right": pos = "D CR"; break;
		case "Defender Right/Center": pos = "D RC"; break;
		case "Defender Left/Right": pos = "D LR"; break;
		case "Defender Right/Left": pos = "D RL"; break;
		case "Defender Left/Center": pos = "D LC"; break;
		case "Defender Center/Left": pos = "D CL"; break;
		
		case "Defender/Defensive Midfielder Left": pos = "D/DM L"; break;
		case "Defensive Midfielder/Defender Left": pos = "DM/D L"; break;
		case "Defender/Defensive Midfielder Right": pos = "D/DM R"; break;
		case "Defensive Midfielder/Defender Right": pos = "DM/D R"; break;
		case "Defender/Defensive Midfielder Center": pos = "D/DM C"; break;
		case "Defensive Midfielder/Defender Center": pos = "DM/D C"; break;
		
		case "Defender/Midfielder Left": pos = "D/M L"; break;
		case "Midfielder/Defender Left": pos = "M/D L"; break;
		case "Defender/Midfielder Right": pos = "D/M R"; break;
		case "Midfielder/Defender Right": pos = "M/D R"; break;
		case "Defender/Midfielder Center": pos = "D/M C"; break;
		case "Midfielder/Defender Center": pos = "M/D C"; break;
		
		case "Defensive Midfielder Left": pos = "DM L"; break;
		case "Defensive Midfielder Center": pos = "DM C"; break;
		case "Defensive Midfielder Right": pos = "DM R"; break;
		case "Defensive Midfielder Left/Center": pos = "DM LC"; break;
		case "Defensive Midfielder Center/Left": pos = "DM CL"; break;
		case "Defensive Midfielder Center/Right": pos = "DM CR"; break;
		case "Defensive Midfielder Right/Center": pos = "DM RC"; break;
		case "Defensive Midfielder Left/Right": pos = "DM LR"; break;
		case "Defensive Midfielder Right/Left": pos = "DM RL"; break;
		
		case "Defensive Midfielder/Midfielder Left": pos = "DM/M L"; break;
		case "Midfielder/Defensive Midfielder Left": pos = "M/DM L"; break;
		case "Defensive Midfielder/Midfielder Center": pos = "DM/M C"; break;
		case "Midfielder/Defensive Midfielder Center": pos = "M/DM C"; break;
		case "Defensive Midfielder/Midfielder Right": pos = "DM/M R"; break;
		case "Midfielder/Defensive Midfielder Right": pos = "M/DM R"; break;
		
		case "Defensive Midfielder Left/Forward": pos = "DM L, F "; break;
		case "Forward/Defensive Midfielder Left": pos = "F, DM L"; break;
		case "Defensive Midfielder Center/Forward": pos = "DM C, F"; break;
		case "Forward/Defensive Midfielder Center": pos = "F, DM C"; break;
		case "Defensive Midfielder Right/Forward": pos = "DM R, F "; break;
		case "Forward/Defensive Midfielder Right": pos = "F, DM R"; break;
		
		case "Midfielder Left": pos = "M L"; break;
		case "Midfielder Center": pos = "M C"; break;
		case "Midfielder Right": pos = "M R"; break;
		case "Midfielder Left/Center": pos = "M LC"; break;
		case "Midfielder Center/Left": pos = "M CL"; break;
		case "Midfielder Left/Right": pos = "M LR"; break;
		case "Midfielder Right/Left": pos = "M RL"; break;
		case "Midfielder Center/Right": pos = "M CR"; break;
		case "Midfielder Right/Center": pos = "M RC"; break;
		
		case "Midfielder/Offensive Midfielder Left": pos = "M/OM L"; break;
		case "Offensive Midfielder/Midfielder Left": pos = "OM/M L"; break;
		case "Midfielder/Offensive Midfielder Center": pos = "M/OM C"; break;
		case "Offensive Midfielder/Midfielder Center": pos = "OM/M C"; break;
		case "Midfielder/Offensive Midfielder Right": pos = "M/OM R"; break;
		case "Offensive Midfielder/Midfielder Right": pos = "OM/M R"; break;
		
		case "Midfielder Left/Forward": pos = "M L, F"; break;
		case "Forward/Midfielder Left": pos = "F, M L"; break;
		case "Midfielder Center/Forward": pos = "M C, F"; break;
		case "Forward/Midfielder Center": pos = "F, M C"; break;
		case "Midfielder Right/Forward": pos = "M R, F"; break;
		case "Forward/Midfielder Right": pos = "F, M R"; break;
		
		case "Offensive Midfielder Left": pos = "OM L"; break;
		case "Offensive Midfielder Center": pos = "OM C"; break;
		case "Offensive Midfielder Right": pos = "OM R"; break;
		case "Offensive Midfielder Left/Center": pos = "OM LC"; break;
		case "Offensive Midfielder Center/Left": pos = "OM CL"; break;
		case "Offensive Midfielder Center/Right": pos = "OM CR"; break;
		case "Offensive Midfielder Right/Center": pos = "OM RC"; break;
		case "Offensive Midfielder Left/Right": pos = "OM LR"; break
		case "Offensive Midfielder Right/Left": pos = "OM RL"; break
		
                case "Offensive Midfielder/Defender Center": pos = "OM/D C"; break;
		case "Offensive Midfielder Left/Forward": pos = "OM L, F"; break;
		case "Forward/Offensive Midfielder Left": pos = "F, OM L"; break;
		case "Offensive Midfielder Center/Forward": pos = "OM C, F"; break;
		case "Forward/Offensive Midfielder Center": pos = "F, OM C"; break;
		case "Offensive Midfielder Right/Forward": pos = "OM R, F"; break;
		case "Forward/Offensive Midfielder Right": pos = "F, OM R"; break;
		
		case "Forward": pos = "F"; break;
		
		//ES
		case "Portero":	pos = "GK"; break;
		case "Defensa Izquierdo": pos = "D L"; break;
		case "Defensa Central": pos = "D C"; break;
		case "Defensa Derecho": pos = "D R"; break;
		case "Defensa Central/Derecho": pos = "D CR"; break;
		case "Defensa Izquierdo/Derecho": pos = "D LR"; break;
		case "Defensa Izquierdo/Central": pos = "D LC"; break;
		case "Defensa/Mediocampista Defensivo Izquierdo": pos = "D/DM L"; break;
		case "Defensa/Mediocampista Defensivo Derecho": pos = "D/DM R"; break;
		case "Defensa/Mediocampista Defensivo Central": pos = "D/DM C"; break;
		case "Mediocampista Defensivo Izquierdo": pos = "DM L"; break;
		case "Mediocampista Defensivo Central": pos = "DM C"; break;
		case "Mediocampista Defensivo Derecho": pos = "DM R"; break;
		case "Mediocampista Defensivo Izquierdo/Central": pos = "DM LC"; break;
		case "Mediocampista Defensivo Central/Derecho": pos = "DM CR"; break;
		case "Mediocampista Defensivo Central/Derecho": pos = "DM LR"; break;
		case "Mediocampista Defensivo/Mediocampista Izquierdo": pos = "DM/M L"; break;
		case "Mediocampista Defensivo/Mediocampista Central": pos = "DM/M C"; break;
		case "Mediocampista Defensivo/Mediocampista Derecho": pos = "DM/M R"; break;
		case "Mediocampista Izquierdo": pos = "M L"; break;
		case "Mediocampista Central": pos = "M C"; break;
		case "Mediocampista Derecho": pos = "M R"; break;
		case "Mediocampista Izquierdo/Central": pos = "M LC"; break;
		case "Mediocampista Izquierdo/Derecho": pos = "M LR"; break;
		case "Mediocampista Centre/Derecho": pos = "M CR"; break;
		case "Mediocampista/Mediocampista Ofensivo Izquierdo": pos = "M/OM L"; break;
		case "Mediocampista/Mediocampista Ofensivo Central": pos = "M/OM C"; break;
		case "Mediocampista/Mediocampista Ofensivo Derecho": pos = "M/OM R"; break;
		case "Mediocampista Ofensivo Izquierdo": pos = "OM L"; break;
		case "Mediocampista Ofensivo Central": pos = "OM C"; break;
		case "Mediocampista Ofensivo Derecho": pos = "OM R"; break;
		case "Mediocampista Ofensivo Izquierdo/Central": pos = "OM LC"; break;
		case "Mediocampista Ofensivo Central/Derecho": pos = "OM CR"; break;
		case "Mediocampista Ofensivo Izquierdo/Derecho": pos = "OM LR"; break
		case "Mediocampista Ofensivo Izquierdo/Delantero": pos = "OM L, F"; break;
		case "Mediocampista Ofensivo Central/Delantero": pos = "OM C, F"; break;
		case "Mediocampista Ofensivo Derecho/Delantero": pos = "OM R, F"; break;
		case "Delantero": pos = "F"; break;
		
		//FR
		case "Gardien de but":	pos = "GK"; break;
		case "Defenseur Gauche": pos = "D L"; break;
		case "Defenseur Central": pos = "D C"; break;
		case "Defenseur Droit": pos = "D R"; break;
		case "Defenseur Central/Droit": pos = "D CR"; break;
		case "Defenseur Gauche/Droit": pos = "D LR"; break;
		case "Defenseur Gauche/Central": pos = "D LC"; break;
		case "Defenseur/Milieu defensif Gauche": pos = "D/DM L"; break;
		case "Defenseur/Milieu defensif Droit": pos = "D/DM R"; break;
		case "Defenseur/Milieu defensif Central": pos = "D/DM C"; break;
		case "Milieu defensif Gauche": pos = "DM L"; break;
		case "Milieu defensif Central": pos = "DM C"; break;
		case "Milieu defensif Droit": pos = "DM R"; break;
		case "Milieu defensif Gauche/Central": pos = "DM LC"; break;
		case "Milieu defensif Central/Droit": pos = "DM CR"; break;
		case "Milieu defensif Central/Droit": pos = "DM LR"; break;
		case "Milieu defensif/Milieu Gauche": pos = "DM/M L"; break;
		case "Milieu defensif/Milieu Central": pos = "DM/M C"; break;
		case "Milieu defensif/Milieu Droit": pos = "DM/M R"; break;
		case "Milieu Gauche": pos = "M L"; break;
		case "Milieu Central": pos = "M C"; break;
		case "Milieu Droit": pos = "M R"; break;
		case "Milieu Gauche/Central": pos = "M LC"; break;
		case "Milieu Gauche/Droit": pos = "M LR"; break;
		case "Milieu Centre/Droit": pos = "M CR"; break;
		case "Milieu/Milieu offensif Gauche": pos = "M/OM L"; break;
		case "Milieu/Milieu offensif Central": pos = "M/OM C"; break;
		case "Milieu/Milieu offensif Droit": pos = "M/OM R"; break;
		case "Milieu offensif Gauche": pos = "OM L"; break;
		case "Milieu offensif Central": pos = "OM C"; break;
		case "Milieu offensif Droit": pos = "OM R"; break;
		case "Milieu offensif Gauche/Central": pos = "OM LC"; break;
		case "Milieu offensif Central/Droit": pos = "OM CR"; break;
		case "Milieu offensif Gauche/Droit": pos = "OM LR"; break
		case "Milieu offensif Gauche/Attaquant": pos = "OM L, F"; break;
		case "Milieu offensif Central/Attaquant": pos = "OM C, F"; break;
		case "Milieu offensif Droit/Attaquant": pos = "OM R, F"; break;
		case "Attaquant": pos = "F"; break;		
		
		//IT
		case "Portiere":	pos = "GK"; break;
		case "Difensore Sinistro": pos = "D L"; break;
		case "Difensore Centrale": pos = "D C"; break;
		case "Difensore Destro": pos = "D R"; break;
		case "Difensore Centrale/Destro": pos = "D CR"; break;
		case "Difensore Sinistro/Destro": pos = "D LR"; break;
		case "Difensore Sinistro/Centrale": pos = "D LC"; break;
		case "Difensore/Centrocampista Difensivo Sinistro": pos = "D/DM L"; break;
		case "Difensore/Centrocampista Difensivo Destro": pos = "D/DM R"; break;
		case "Difensore/Centrocampista Difensivo Centrale": pos = "D/DM C"; break;
		case "Centrocampista Difensivo Sinistro": pos = "DM L"; break;
		case "Centrocampista Difensivo Centrale": pos = "DM C"; break;
		case "Centrocampista Difensivo Destro": pos = "DM R"; break;
		case "Centrocampista Difensivo Sinistro/Centrale": pos = "DM LC"; break;
		case "Centrocampista Difensivo Centrale/Destro": pos = "DM CR"; break;
		case "Centrocampista Difensivo Centrale/Destro": pos = "DM LR"; break;
		case "Centrocampista Difensivo/Centrocampista Sinistro": pos = "DM/M L"; break;
		case "Centrocampista Difensivo/Centrocampista Centrale": pos = "DM/M C"; break;
		case "Centrocampista Difensivo/Centrocampista Destro": pos = "DM/M R"; break;
		case "Centrocampista Sinistro": pos = "M L"; break;
		case "Centrocampista Centrale": pos = "M C"; break;
		case "Centrocampista Destro": pos = "M R"; break;
		case "Centrocampista Sinistro/Centrale": pos = "M LC"; break;
		case "Centrocampista Sinistro/Destro": pos = "M LR"; break;
		case "Centrocampista Centre/Destro": pos = "M CR"; break;
		case "Centrocampista/Centrocampista Offensivo Sinistro": pos = "M/OM L"; break;
		case "Centrocampista/Centrocampista Offensivo Centrale": pos = "M/OM C"; break;
		case "Centrocampista/Centrocampista Offensivo Destro": pos = "M/OM R"; break;
		case "Centrocampista Offensivo Sinistro": pos = "OM L"; break;
		case "Centrocampista Offensivo Centrale": pos = "OM C"; break;
		case "Centrocampista Offensivo Destro": pos = "OM R"; break;
		case "Centrocampista Offensivo Sinistro/Centrale": pos = "OM LC"; break;
		case "Centrocampista Offensivo Centrale/Destro": pos = "OM CR"; break;
		case "Centrocampista Offensivo Sinistro/Destro": pos = "OM LR"; break
		case "Centrocampista Offensivo Sinistro/Attaccante": pos = "OM L, F"; break;
		case "Centrocampista Offensivo Centrale/Attaccante": pos = "OM C, F"; break;
		case "Centrocampista Offensivo Destro/Attaccante": pos = "OM R, F"; break;
		case "Attaccante": pos = "F"; break;
		
		//NL
		case "Keeper":	pos = "GK"; break;
		case "Verdediger Links": pos = "D L"; break;
		case "Verdediger Centraal": pos = "D C"; break;
		case "Verdediger Rechts": pos = "D R"; break;
		case "Verdediger Centraal/Rechts": pos = "D CR"; break;
		case "Verdediger Links/Rechts": pos = "D LR"; break;
		case "Verdediger Links/Centraal": pos = "D LC"; break;
		case "Verdediger/Verdedigende Middenvelder Links": pos = "D/DM L"; break;
		case "Verdediger/Verdedigende Middenvelder Rechts": pos = "D/DM R"; break;
		case "Verdediger/Verdedigende Middenvelder Centraal": pos = "D/DM C"; break;
		case "Verdedigende Middenvelder Links": pos = "DM L"; break;
		case "Verdedigende Middenvelder Centraal": pos = "DM C"; break;
		case "Verdedigende Middenvelder Rechts": pos = "DM R"; break;
		case "Verdedigende Middenvelder Links/Centraal": pos = "DM LC"; break;
		case "Verdedigende Middenvelder Centraal/Rechts": pos = "DM CR"; break;
		case "Verdedigende Middenvelder Centraal/Rechts": pos = "DM LR"; break;
		case "Verdedigende Middenvelder/Middenvelder Links": pos = "DM/M L"; break;
		case "Verdedigende Middenvelder/Middenvelder Centraal": pos = "DM/M C"; break;
		case "Verdedigende Middenvelder/Middenvelder Rechts": pos = "DM/M R"; break;
		case "Middenvelder Links": pos = "M L"; break;
		case "Middenvelder Centraal": pos = "M C"; break;
		case "Middenvelder Rechts": pos = "M R"; break;
		case "Middenvelder Links/Centraal": pos = "M LC"; break;
		case "Middenvelder Links/Rechts": pos = "M LR"; break;
		case "Middenvelder Centre/Rechts": pos = "M CR"; break;
		case "Middenvelder/Aanvallende Middenvelder Links": pos = "M/OM L"; break;
		case "Middenvelder/Aanvallende Middenvelder Centraal": pos = "M/OM C"; break;
		case "Middenvelder/Aanvallende Middenvelder Rechts": pos = "M/OM R"; break;
		case "Aanvallende Middenvelder Links": pos = "OM L"; break;
		case "Aanvallende Middenvelder Centraal": pos = "OM C"; break;
		case "Aanvallende Middenvelder Rechts": pos = "OM R"; break;
		case "Aanvallende Middenvelder Links/Centraal": pos = "OM LC"; break;
		case "Aanvallende Middenvelder Centraal/Rechts": pos = "OM CR"; break;
		case "Aanvallende Middenvelder Links/Rechts": pos = "OM LR"; break
		case "Aanvallende Middenvelder Links/Spits": pos = "OM L, F"; break;
		case "Aanvallende Middenvelder Centraal/Spits": pos = "OM C, F"; break;
		case "Aanvallende Middenvelder Rechts/Spits": pos = "OM R, F"; break;
		case "Spits": pos = "F"; break;
		
		//NO
		case "Keeper":	pos = "GK"; break;
		case "Forsvarer Venstre": pos = "D L"; break;
		case "Forsvarer Sentralt": pos = "D C"; break;
		case "Forsvarer Hoyre": pos = "D R"; break;
		case "Forsvarer Sentralt/Hoyre": pos = "D CR"; break;
		case "Forsvarer Venstre/Hoyre": pos = "D LR"; break;
		case "Forsvarer Venstre/Sentralt": pos = "D LC"; break;
		case "Forsvarer/Defensiv Midtbanespillere Venstre": pos = "D/DM L"; break;
		case "Forsvarer/Defensiv Midtbanespillere Hoyre": pos = "D/DM R"; break;
		case "Forsvarer/Defensiv Midtbanespillere Sentralt": pos = "D/DM C"; break;
		case "Defensiv Midtbanespillere Venstre": pos = "DM L"; break;
		case "Defensiv Midtbanespillere Sentralt": pos = "DM C"; break;
		case "Defensiv Midtbanespillere Hoyre": pos = "DM R"; break;
		case "Defensiv Midtbanespillere Venstre/Sentralt": pos = "DM LC"; break;
		case "Defensiv Midtbanespillere Sentralt/Hoyre": pos = "DM CR"; break;
		case "Defensiv Midtbanespillere Venstre/Hoyre": pos = "DM LR"; break;
		case "Defensiv Midtbanespillere/Midtbanespiller Venstre": pos = "DM/M L"; break;
		case "Defensiv Midtbanespillere/Midtbanespiller Sentralt": pos = "DM/M C"; break;
		case "Defensiv Midtbanespillere/Midtbanespiller Hoyre": pos = "DM/M R"; break;
		case "Midtbanespiller Venstre": pos = "M L"; break;
		case "Midtbanespiller Sentralt": pos = "M C"; break;
		case "Midtbanespiller Hoyre": pos = "M R"; break;
		case "Midtbanespiller Venstre/Sentralt": pos = "M LC"; break;
		case "Midtbanespiller Venstre/Hoyre": pos = "M LR"; break;
		case "Midtbanespiller Sentralt/Hoyre": pos = "M CR"; break;
		case "Midtbanespiller/Offensiv Midtbanespiller Venstre": pos = "M/OM L"; break;
		case "Midtbanespiller/Offensiv Midtbanespiller Sentralt": pos = "M/OM C"; break;
		case "Midtbanespiller/Offensiv Midtbanespiller Hoyre": pos = "M/OM R"; break;
		case "Offensiv Midtbanespiller Venstre": pos = "OM L"; break;
		case "Offensiv Midtbanespiller Sentralt": pos = "OM C"; break;
		case "Offensiv Midtbanespiller Hoyre": pos = "OM R"; break;
		case "Offensiv Midtbanespiller Venstre/Sentralt": pos = "OM LC"; break;
		case "Offensiv Midtbanespiller Sentralt/Hoyre": pos = "OM CR"; break;
		case "Offensiv Midtbanespiller Venstre/Hoyre": pos = "OM LR"; break
		case "Offensiv Midtbanespiller Venstre/Forward": pos = "OM L, F"; break;
		case "Offensiv Midtbanespiller Sentralt/Forward": pos = "OM C, F"; break;
		case "Offensiv Midtbanespiller Hoyre/Forward": pos = "OM R, F"; break;
		case "Angriper": pos = "F"; break;
		
		//PL
		case "Bramkarz":	pos = "GK"; break;
		case "Obro?ca lewy": pos = "D L"; break;
		case "Obro?ca ?rodkowy": pos = "D C"; break;
		case "Obro?ca prawy": pos = "D R"; break;
		case "Obro?ca ?rodkowy/prawy": pos = "D CR"; break;
		case "Obro?ca lewy/prawy": pos = "D LR"; break;
		case "Obro?ca lewy/?rodkowy": pos = "D LC"; break;
		case "Obro?ca/Defensywny pomocnik lewy": pos = "D/DM L"; break;
		case "Obro?ca/Defensywny pomocnik prawy": pos = "D/DM R"; break;
		case "Obro?ca/Defensywny pomocnik ?rodkowy": pos = "D/DM C"; break;
		case "Defensywny pomocnik lewy": pos = "DM L"; break;
		case "Defensywny pomocnik ?rodkowy": pos = "DM C"; break;
		case "Defensywny pomocnik prawy": pos = "DM R"; break;
		case "Defensywny pomocnik lewy/?rodkowy": pos = "DM LC"; break;
		case "Defensywny pomocnik ?rodkowy/prawy": pos = "DM CR"; break;
		case "Defensywny pomocnik ?rodkowy/prawy": pos = "DM LR"; break;
		case "Defensywny pomocnik/Pomocnik lewy": pos = "DM/M L"; break;
		case "Defensywny pomocnik/Pomocnik ?rodkowy": pos = "DM/M C"; break;
		case "Defensywny pomocnik/Pomocnik prawy": pos = "DM/M R"; break;
		case "Pomocnik lewy": pos = "M L"; break;
		case "Pomocnik ?rodkowy": pos = "M C"; break;
		case "Pomocnik prawy": pos = "M R"; break;
		case "Pomocnik lewy/?rodkowy": pos = "M LC"; break;
		case "Pomocnik lewy/prawy": pos = "M LR"; break;
		case "Pomocnik Centre/prawy": pos = "M CR"; break;
		case "Pomocnik/Ofensywny pomocnik lewy": pos = "M/OM L"; break;
		case "Pomocnik/Ofensywny pomocnik ?rodkowy": pos = "M/OM C"; break;
		case "Pomocnik/Ofensywny pomocnik prawy": pos = "M/OM R"; break;
		case "Ofensywny pomocnik lewy": pos = "OM L"; break;
		case "Ofensywny pomocnik ?rodkowy": pos = "OM C"; break;
		case "Ofensywny pomocnik prawy": pos = "OM R"; break;
		case "Ofensywny pomocnik lewy/?rodkowy": pos = "OM LC"; break;
		case "Ofensywny pomocnik ?rodkowy/prawy": pos = "OM CR"; break;
		case "Ofensywny pomocnik lewy/prawy": pos = "OM LR"; break
		case "Ofensywny pomocnik lewy/Napastnik": pos = "OM L, F"; break;
		case "Ofensywny pomocnik ?rodkowy/Napastnik": pos = "OM C, F"; break;
		case "Ofensywny pomocnik prawy/Napastnik": pos = "OM R, F"; break;
		case "Napastnik": pos = "F"; break;	
		
		//PO
		case "Guarda-Redes":	pos = "GK"; break;
		case "Defesa Esquerdo": pos = "D L"; break;
		case "Defesa Centro": pos = "D C"; break;
		case "Defesa Direito": pos = "D R"; break;
		case "Defesa Centro/Direito": pos = "D CR"; break;
		case "Defesa Esquerdo/Direito": pos = "D LR"; break;
		case "Defesa Esquerdo/Centro": pos = "D LC"; break;
		case "Defesa/Medio Defensivo Esquerdo": pos = "D/DM L"; break;
		case "Defesa/Medio Defensivo Direito": pos = "D/DM R"; break;
		case "Defesa/Medio Defensivo Centro": pos = "D/DM C"; break;
		case "Medio Defensivo Esquerdo": pos = "DM L"; break;
		case "Medio Defensivo Centro": pos = "DM C"; break;
		case "Medio Defensivo Direito": pos = "DM R"; break;
		case "Medio Defensivo Esquerdo/Centro": pos = "DM LC"; break;
		case "Medio Defensivo Centro/Direito": pos = "DM CR"; break;
		case "Medio Defensivo Esquerdo/Direito": pos = "DM LR"; break;
		case "Medio Defensivo/Medio Esquerdo": pos = "DM/M L"; break;
		case "Medio Defensivo/Medio Centro": pos = "DM/M C"; break;
		case "Medio Defensivo/Medio Direito": pos = "DM/M R"; break;
		case "Medio Esquerdo": pos = "M L"; break;
		case "Medio Centro": pos = "M C"; break;
		case "Medio Direito": pos = "M R"; break;
		case "Medio Esquerdo/Centro": pos = "M LC"; break;
		case "Medio Esquerdo/Direito": pos = "M LR"; break;
		case "Medio Centro/Direito": pos = "M CR"; break;
		case "Medio/Medio Ofensivo Esquerdo": pos = "M/OM L"; break;
		case "Medio/Medio Ofensivo Centro": pos = "M/OM C"; break;
		case "Medio/Medio Ofensivo Direito": pos = "M/OM R"; break;
		case "Medio Ofensivo Esquerdo": pos = "OM L"; break;
		case "Medio Ofensivo Centro": pos = "OM C"; break;
		case "Medio Ofensivo Direito": pos = "OM R"; break;
		case "Medio Ofensivo Esquerdo/Centro": pos = "OM LC"; break;
		case "Medio Ofensivo Centro/Direito": pos = "OM CR"; break;
		case "Medio Ofensivo Esquerdo/Direito": pos = "OM LR"; break
		case "Medio Ofensivo Esquerdo/Avancado": pos = "OM L, F"; break;
		case "Medio Ofensivo Centro/Avancado": pos = "OM C, F"; break;
		case "Medio Ofensivo Direito/Avancado": pos = "OM R, F"; break;
		case "Avancado": pos = "F"; break;

		//PO (BRA)
		case "Goleiro":	pos = "GK"; break;
		case "Zagueiro Esquerdo": pos = "D L"; break;
		case "Zagueiro Central": pos = "D C"; break;
		case "Zagueiro Direito": pos = "D R"; break;
		case "Zagueiro Central/Direito": pos = "D CR"; break;
		case "Zagueiro Esquerdo/Direito": pos = "D LR"; break;
		case "Zagueiro Esquerdo/Central": pos = "D LC"; break;
		case "Zagueiro/Volante Esquerdo": pos = "D/DM L"; break;
		case "Zagueiro/Volante Direito": pos = "D/DM R"; break;
		case "Zagueiro/Volante Central": pos = "D/DM C"; break;
		case "Volante Esquerdo": pos = "DM L"; break;
		case "Volante Central": pos = "DM C"; break;
		case "Volante Direito": pos = "DM R"; break;
		case "Volante Esquerdo/Central": pos = "DM LC"; break;
		case "Volante Central/Direito": pos = "DM CR"; break;
		case "Volante Esquerdo/Direito": pos = "DM LR"; break;
		case "Volante/Meio-Campista Esquerdo": pos = "DM/M L"; break;
		case "Volante/Meio-Campista Central": pos = "DM/M C"; break;
		case "Volante/Meio-Campista Direito": pos = "DM/M R"; break;
		case "Meio-Campista Esquerdo": pos = "M L"; break;
		case "Meio-Campista Central": pos = "M C"; break;
		case "Meio-Campista Direito": pos = "M R"; break;
		case "Meio-Campista Esquerdo/Central": pos = "M LC"; break;
		case "Meio-Campista Esquerdo/Direito": pos = "M LR"; break;
		case "Meio-Campista Central/Direito": pos = "M CR"; break;
		case "Meio-Campista/Meia Ofensivo Esquerdo": pos = "M/OM L"; break;
		case "Meio-Campista/Meia Ofensivo Central": pos = "M/OM C"; break;
		case "Meio-Campista/Meia Ofensivo Direito": pos = "M/OM R"; break;
		case "Meia Ofensivo Esquerdo": pos = "OM L"; break;
		case "Meia Ofensivo Central": pos = "OM C"; break;
		case "Meia Ofensivo Direito": pos = "OM R"; break;
		case "Meia Ofensivo Esquerdo/Central": pos = "OM LC"; break;
		case "Meia Ofensivo Central/Direito": pos = "OM CR"; break;
		case "Meia Ofensivo Esquerdo/Direito": pos = "OM LR"; break
		case "Meia Ofensivo Esquerdo/Atacante": pos = "OM L, F"; break;
		case "Meia Ofensivo Central/Atacante": pos = "OM C, F"; break;
		case "Meia Ofensivo Direito/Atacante": pos = "OM R, F"; break;
		case "Atacante": pos = "F"; break;	

		//RU		
		case "Вратарь":	pos = "GK"; break;
		case "Защитник Left": pos = "D L"; break;
		case "Защитник Center": pos = "D C"; break;
		case "Защитник Right": pos = "D R"; break;
		case "Защитник Center/Right": pos = "D CR"; break;
		case "Защитник Left/Right": pos = "D LR"; break;
		case "Защитник Left/Center": pos = "D LC"; break;
		case "Защитник/Опорный полузащитник Left": pos = "D/DM L"; break;
		case "Защитник/Опорный полузащитник Right": pos = "D/DM R"; break;
		case "Защитник/Опорный полузащитник Center": pos = "D/DM C"; break;
		case "Опорный полузащитник Left": pos = "DM L"; break;
		case "Опорный полузащитник Center": pos = "DM C"; break;
		case "Опорный полузащитник Right": pos = "DM R"; break;
		case "Опорный полузащитник Left/Center": pos = "DM LC"; break;
		case "Опорный полузащитник Center/Right": pos = "DM CR"; break;
		case "Опорный полузащитник Left/Right": pos = "DM LR"; break;
		case "Опорный полузащитник/Полузащитник Left": pos = "DM/M L"; break;
		case "Опорный полузащитник/Полузащитник Center": pos = "DM/M C"; break;
		case "Опорный полузащитник/Полузащитник Right": pos = "DM/M R"; break;
		case "Полузащитник Left": pos = "M L"; break;
		case "Полузащитник Center": pos = "M C"; break;
		case "Полузащитник Right": pos = "M R"; break;
		case "Полузащитник Left/Center": pos = "M LC"; break;
		case "Полузащитник Left/Right": pos = "M LR"; break;
		case "Полузащитник Center/Right": pos = "M CR"; break;
		case "Полузащитник/Атакующий полузащитник Left": pos = "M/OM L"; break;
		case "Полузащитник/Атакующий полузащитник Center": pos = "M/OM C"; break;
		case "Полузащитник/Атакующий полузащитник Right": pos = "M/OM R"; break;
		case "Атакующий полузащитник Left": pos = "OM L"; break;
		case "Атакующий полузащитник Center": pos = "OM C"; break;
		case "Атакующий полузащитник Right": pos = "OM R"; break;
		case "Атакующий полузащитник Left/Center": pos = "OM LC"; break;
		case "Атакующий полузащитник Center/Right": pos = "OM CR"; break;
		case "Атакующий полузащитник Left/Right": pos = "OM LR"; break
		case "Атакующий полузащитник Left/Форвард": pos = "OM L, F"; break;
		case "Атакующий полузащитник Center/Форвард": pos = "OM C, F"; break;
		case "Атакующий полузащитник Right/Форвард": pos = "OM R, F"; break;
		case "Форвард": pos = "F"; break;
		
		//SL
		case "BrankA!r":	pos = "GK"; break;
		case "Obranca A?avA?": pos = "D L"; break;
		case "Obranca StredovA?": pos = "D C"; break;
		case "Obranca PravA?": pos = "D R"; break;
		case "Obranca StredovA?/PravA?": pos = "D CR"; break;
		case "Obranca A?avA?/PravA?": pos = "D LR"; break;
		case "Obranca A?avA?/StredovA?": pos = "D LC"; break;
		case "Obranca/DefenzA-vny zA!loA?nA-k A?avA?": pos = "D/DM L"; break;
		case "Obranca/DefenzA-vny zA!loA?nA-k PravA?": pos = "D/DM R"; break;
		case "Obranca/DefenzA-vny zA!loA?nA-k StredovA?": pos = "D/DM C"; break;
		case "DefenzA-vny zA!loA?nA-k A?avA?": pos = "DM L"; break;
		case "DefenzA-vny zA!loA?nA-k StredovA?": pos = "DM C"; break;
		case "DefenzA-vny zA!loA?nA-k PravA?": pos = "DM R"; break;
		case "DefenzA-vny zA!loA?nA-k A?avA?/StredovA?": pos = "DM LC"; break;
		case "DefenzA-vny zA!loA?nA-k StredovA?/PravA?": pos = "DM CR"; break;
		case "DefenzA-vny zA!loA?nA-k A?avA?/PravA?": pos = "DM LR"; break;
		case "DefenzA-vny zA!loA?nA-k/ZA!loA?nA-k A?avA?": pos = "DM/M L"; break;
		case "DefenzA-vny zA!loA?nA-k/ZA!loA?nA-k StredovA?": pos = "DM/M C"; break;
		case "DefenzA-vny zA!loA?nA-k/ZA!loA?nA-k PravA?": pos = "DM/M R"; break;
		case "ZA!loA?nA-k A?avA?": pos = "M L"; break;
		case "ZA!loA?nA-k StredovA?": pos = "M C"; break;
		case "ZA!loA?nA-k PravA?": pos = "M R"; break;
		case "ZA!loA?nA-k A?avA?/StredovA?": pos = "M LC"; break;
		case "ZA!loA?nA-k A?avA?/PravA?": pos = "M LR"; break;
		case "ZA!loA?nA-k StredovA?/PravA?": pos = "M CR"; break;
		case "ZA!loA?nA-k/OfenzA-vny zA!loA?nA-k A?avA?": pos = "M/OM L"; break;
		case "ZA!loA?nA-k/OfenzA-vny zA!loA?nA-k StredovA?": pos = "M/OM C"; break;
		case "ZA!loA?nA-k/OfenzA-vny zA!loA?nA-k Right": pos = "M/OM R"; break;
		case "OfenzA-vny zA!loA?nA-k A?avA?": pos = "OM L"; break;
		case "OfenzA-vny zA!loA?nA-k StredovA?": pos = "OM C"; break;
		case "OfenzA-vny zA!loA?nA-k PravA?": pos = "OM R"; break;
		case "OfenzA-vny zA!loA?nA-k A?avA?/StredovA?": pos = "OM LC"; break;
		case "OfenzA-vny zA!loA?nA-k StredovA?/PravA?": pos = "OM CR"; break;
		case "OfenzA-vny zA!loA?nA-k A?avA?/PravA?": pos = "OM LR"; break
		case "OfenzA-vny zA!loA?nA-k A?avA?/A?toA?nA-k": pos = "OM L, F"; break;
		case "OfenzA-vny zA!loA?nA-k StredovA?/A?toA?nA-k": pos = "OM C, F"; break;
		case "OfenzA-vny zA!loA?nA-k PravA?/A?toA?nA-k": pos = "OM R, F"; break;
		case "A?toA?nA-k": pos = "F"; break;
		
		//SWE
		case "Malvakt":	pos = "GK"; break;
		case "Forsvarare Vanster": pos = "D L"; break;
		case "Forsvarare Central": pos = "D C"; break;
		case "Forsvarare Hoger": pos = "D R"; break;
		case "Forsvarare Central/Hoger": pos = "D CR"; break;
		case "Forsvarare Vanster/Hoger": pos = "D LR"; break;
		case "Forsvarare Vanster/Central": pos = "D LC"; break;
		case "Forsvarare/Defensiv mittfaltare Vanster": pos = "D/DM L"; break;
		case "Forsvarare/Defensiv mittfaltare Hoger": pos = "D/DM R"; break;
		case "Forsvarare/Defensiv mittfaltare Central": pos = "D/DM C"; break;
		case "Defensiv mittfaltare Vanster": pos = "DM L"; break;
		case "Defensiv mittfaltare Central": pos = "DM C"; break;
		case "Defensiv mittfaltare Hoger": pos = "DM R"; break;
		case "Defensiv mittfaltare Vanster/Central": pos = "DM LC"; break;
		case "Defensiv mittfaltare Central/Hoger": pos = "DM CR"; break;
		case "Defensiv mittfaltare Vanster/Hoger": pos = "DM LR"; break;
		case "Defensiv mittfaltare/Mittfaltare Vanster": pos = "DM/M L"; break;
		case "Defensiv mittfaltare/Mittfaltare Central": pos = "DM/M C"; break;
		case "Defensiv mittfaltare/Mittfaltare Hoger": pos = "DM/M R"; break;
		case "Mittfaltare Vanster": pos = "M L"; break;
		case "Mittfaltare Central": pos = "M C"; break;
		case "Mittfaltare Hoger": pos = "M R"; break;
		case "Mittfaltare Vanster/Central": pos = "M LC"; break;
		case "Mittfaltare Vanster/Hoger": pos = "M LR"; break;
		case "Mittfaltare Central/Hoger": pos = "M CR"; break;
		case "Mittfaltare/Offensiv mittfaltare Vanster": pos = "M/OM L"; break;
		case "Mittfaltare/Offensiv mittfaltare Central": pos = "M/OM C"; break;
		case "Mittfaltare/Offensiv mittfaltare Hoger": pos = "M/OM R"; break;
		case "Offensiv mittfaltare Vanster": pos = "OM L"; break;
		case "Offensiv mittfaltare Central": pos = "OM C"; break;
		case "Offensiv mittfaltare Hoger": pos = "OM R"; break;
		case "Offensiv mittfaltare Vanster/Central": pos = "OM LC"; break;
		case "Offensiv mittfaltare Central/Hoger": pos = "OM CR"; break;
		case "Offensiv mittfaltare Vanster/Hoger": pos = "OM LR"; break
		case "Offensiv mittfaltare Vanster/Forward": pos = "OM L, F"; break;
		case "Offensiv mittfaltare Central/Forward": pos = "OM C, F"; break;
		case "Offensiv mittfaltare Hoger/Forward": pos = "OM R, F"; break;
		case "Forward": pos = "F"; break;
		
		//default: alert("日本語版の不備についてはクラブID「2925434」に問い合わせて下さい。決して本家配布元に問い合わせないようにお願いします。<br><br>This version is Japanese ver.<br>Please contact the team ID : 2925434")
		}

		//alert ("pos: " + pos)
		stae=parseInt(stae);
		kon=parseInt(kon);
		ges=parseInt(ges);
		man=parseInt(man);
		zwe=parseInt(zwe);
		lau=parseInt(lau);
		ste=parseInt(ste);
		pass=parseInt(pass);
		fla=parseInt(fla);
		tec=parseInt(tec);
		kop=parseInt(kop);
		tor=parseInt(tor);
		wei=parseInt(wei);
		sta=parseInt(sta);
		//abw=parseInt(abw);
		
		// Skillsummen berechnen je nachdem wie deinen Positionen heissen
				
	switch (pos) {

		case "GK":
//		alert ("case gk")

				//Abwurf
				abw_td = aux.getElementsByTagName("tr")[zeile+7].getElementsByTagName("td")[1];

				if(abw_td.getElementsByTagName("span").length==1) // wenn span Tag, wird der Inhalt des ersten Span-Tags ausgelesen
				{
				var abw = abw_td.getElementsByTagName("span")[0].innerHTML;
				//alert ("span " + abw)
				}
				else if(abw_td.getElementsByTagName("img").length==1){ // wenn img Tag, wird das alt-Atribut des ersten img-Tags ausgelesen
				var abw = abw_td.getElementsByTagName("img")[0].getAttribute("alt");
				//alert ("img " + abw)
				}
				else{ // wenn keins von beiden, wird der Inhalt der Tabellenzelle uebernommen
				var abw = aux.rows[zeile+7].cells[3].innerHTML;
				//alert ("normal " + abw)
				}
			abw=parseInt(abw);
			//GK-Skills
			//pass = Handling .:. tec = Reflexes .:. stae = Strength .:. kon = Stamina .:. ges = Pace .:. wei = Communication .:. sta = Kicking .:. abw = Throwing .:. tor = Jumping .:. kop = Arial .:. fla = One //
			//var skillsumme = (((10.83333*pass) + (9.999982*tec) + 5.833338*(stae+ges+tor+fla+kop))/10)*(1+rou_factor*rou);
			//var skillsumme = (((10.83333*pass) + (9.999982*tec) + 5.833338*(stae+ges+zwe+ste+kop)+0.00*(kon+tor+wei+sta))/10)*(1+rou_factor*rou);
			var skillsumme = ((7.46268654*(pass + tec) + 5.223881*(fla + kop + tor) + 3.73134327*(stae + kon + ges + wei) + 2.238806*(sta + abw))/10)*(1+rou_factor*rou);
		break;

		case "Defender ":
		case "D C": 
//		alert ("case dc")		
			var skillsumme = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
		break;

		case "D L":
//		alert ("case dl")
			var skillsumme = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
		break;

		case "D R":
//		alert ("case dr")		
			var skillsumme = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
		break;

		case "D LR":
//		alert ("case dlr")
			var skillsumme = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
		break;
		
		case "D RL":
//		alert ("case dlr")
			var skillsumme = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
		break;

		case "D CR":
			var skillsumme1 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "D RC":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "D LC":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);			
			//var skillsumme2 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;		
		
		case "D CL":
			var skillsumme1 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);			
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;		

		case "D/DM C":
			var skillsumme1 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "DM/D C":
			var skillsumme1 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "D/DM R":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "DM/D R":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "D/DM L":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "DM/D L":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "D/M C":
			var skillsumme1 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M/D C":
			var skillsumme1 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "D/M R":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M/D R":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "D/M L":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M/D L":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "D/OM C":
			var skillsumme1 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM/D C":
			var skillsumme1 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "D/OM R":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM/D R":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "D/OM L":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM/D L":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "D C, F":
			var skillsumme1 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, D C":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "D R, F":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, D R":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "D L, F":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, D L":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + ste) + 0.6601167*(kon + lau + pass + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 5.769231*ges + 5.769231*man + 6.41025639*zwe + 3.84615374*lau + 3.20512819*ste + 1.92307687*pass + 5.1282053*fla + 3.20512819*tec + 4.48717928*kop + 0.641025662*tor + 1.28205132*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "DM C":
//		alert ("case dmc")		
			var skillsumme = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
		break;

		case "DM L":
//		alert ("case dml")		
			var skillsumme = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
		break;

		case "DM R":
//		alert ("case dmr")		
			var skillsumme = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
		break;

		case "DM LR":
//		alert ("case dmlr")		
			var skillsumme = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
		break;
		
		case "DM RL":
//		alert ("case dmlr")		
			var skillsumme = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
		break;

		case "DM CR":
			var skillsumme1 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "DM RC":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "DM LC":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "DM CL":
			var skillsumme1 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "DM/M C":
			var skillsumme1 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M/DM C":
			var skillsumme1 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "DM/M R":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M/DM R":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "DM/M L":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);			
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M/DM L":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "DM/OM C":
			var skillsumme1 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM/DM C":
			var skillsumme1 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "DM/OM R":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM/DM R":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "DM/OM L":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM/DM L":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "DM C, F":
			var skillsumme1 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, DM C":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.263158*(ste + lau + pass + man + zwe + stae + kop) + 3.070175*(kon + ges + fla + tec) + 0.4385965*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.88654542*stae + 4.12940073*kon + 3.42679548*ges + 4.31633234*man + 4.174524*zwe + 4.978852*lau + 4.488497*ste + 4.69665146*pass + 3.00994468*fla + 3.15018058*tec + 2.76461983*kop + 2.23897719*tor + 3.171397*wei + 1.94508481*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "DM R, F":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, DM R":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "DM L, F":
			var skillsumme1 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, DM L":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((7.890697*(ges + man + zwe) + 4.605465*(stae + kop + tec + fla + pass) + 0.6601167*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.1392417*stae + 3.07755566*kon + 5.25320959*ges + 4.238464*man + 4.91002226*zwe + 4.84742928*lau + 3.75742078*ste + 3.173591*pass + 5.093115*fla + 3.4703362*tec + 2.83058333*kop + 2.089457*tor + 2.735374*wei + 1.704412*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "M C":
//		alert ("case mc")		
			var skillsumme = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
		break;

		case "M L":
//		alert ("case ml")		
			var skillsumme = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
		break;

		case "M R":
//		alert ("case mr")		
			var skillsumme = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
		break;

		case "M LR":
//		alert ("case mlr")		
			var skillsumme = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
		break;
		
		case "M RL":
//		alert ("case mlr")		
			var skillsumme = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
		break;
		
		case "M CR":
			var skillsumme1 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M RC":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M LC":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;		

		case "M CL":
			var skillsumme1 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;			

		case "M/OM C":
			var skillsumme1 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM/M C":
			var skillsumme1 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "M/OM R":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);	
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM/M R":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);	
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "M/OM L":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);	
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);			
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM/M L":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);	
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M C, F":
			var skillsumme1 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, M C":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.182408*(ste + lau + man + zwe + pass + tec) + 3.604903*(kon + kop + stae) + 0.5227109*(ges + fla + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.57142854*stae + 4.16666651*kon + 3.57142854*ges + 4.16666651*man + 3.57142854*zwe + 4.76190472*lau + 4.76190472*ste + 4.76190472*pass + 2.38095236*fla + 3.57142854*tec + 2.38095236*kop + 2.97619057*tor + 3.57142854*wei + 1.78571427*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M L, F":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);	
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, M L":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);	
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "M R, F":
			var skillsumme1 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);	
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, M R":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.041541*(ste + lau + man + zwe + pass + tec + fla + ges) + 2.945619*(kon + kop + stae) + 0.4154079*(tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.22580647*stae + 3.22580647*kon + 4.83871*ges + 3.76344085*man + 4.30107546*zwe + 4.83871*lau + 4.30107546*ste + 3.22580647*pass + 5.376344*fla + 3.76344085*tec + 1.61290324*kop + 2.688172*tor + 3.22580647*wei + 1.61290324*sta)/10)*(1+rou_factor*rou);	
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "OM C":
//		alert ("case omc")
			var skillsumme = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
		break;

		case "OM L":
//		alert ("case oml")
			var skillsumme = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
		break;

		case "OM R":
//		alert ("case omr")
			var skillsumme = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
		break;

		case "OM LR":
//		alert ("case omlr")
			var skillsumme = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
		break;
		
		case "OM RL":
//		alert ("case omlr")
			var skillsumme = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
		break;

		case "OM CR":
			var skillsumme1 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM RC":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "OM LC":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);			
			//var skillsumme2 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "OM CL":
			var skillsumme1 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "OM C, F":
			var skillsumme1 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		

		case "OM/D C":
			var skillsumme1 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.98324*(man + zwe + stae + kop + ges) + 4.067738*(pass + fla + tec) + 0.5761173*(kon + lau + ste + tor + wei + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((5.263158*stae + 2.631579*kon + 3.94736838*ges + 7.236842*man + 6.57894754*zwe + 3.28947377*lau + 3.94736838*ste + 3.28947377*pass + 2.631579*fla + 1.31578946*tec + 5.92105246*kop + 0.657894731*tor + 1.31578946*wei + 1.97368419*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, OM C":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((5.824724*(lau + kop + pass + tec + tor + wei) + 3.402209*(ste + stae + man + zwe) + 0.4809405*(fla + kon + ges + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.036602*stae + 3.82313943*kon + 3.86811256*ges + 2.16804*man + 2.716975*zwe + 4.52750063*lau + 4.27351856*ste + 6.163243*pass + 1.71992743*fla + 4.530125*tec + 3.28732085*kop + 4.00246334*tor + 4.26543236*wei + 1.59337246*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "OM R, F":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, OM R":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "OM L, F":
			var skillsumme1 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);			
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;
		
		case "F, OM L":
			var skillsumme1 = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			var skillsumme2 = ((6.807867*(ges + tec + fla) + 3.97882*(lau + ste + tor + wei + kop + stae + kon) + 0.5748866*(man + zwe + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme1 = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
			//var skillsumme2 = ((3.26353669*stae + 2.770136*kon + 4.873922*ges + 3.52015066*man + 3.48778987*zwe + 4.4060216*lau + 4.425333*ste + 3.69829655*pass + 5.533843*fla + 3.884195*tec + 1.62157047*kop + 3.26996684*tor + 3.769781*wei + 1.73895681*sta)/10)*(1+rou_factor*rou);
			skillsumme1 = new String(skillsumme1.toFixed(2));
			skillsumme2 = new String(skillsumme2.toFixed(2));
			var skillsumme_str = skillsumme1 + "/" + skillsumme2;
		break;

		case "F":
		//alert ("case f")
			var skillsumme = ((6.903289*(stae + kop + tor + wei) + 4.021492*(kon + ges + lau + ste + tec) + 0.5698469*(man + zwe + fla + pass + sta))/10)*(1+rou_factor*rou);
			//var skillsumme = ((3.84615374*stae + 2.56410265*kon + 3.84615374*ges + 0.641025662*man + 0.641025662*zwe + 3.20512819*lau + 3.84615374*ste + 3.84615374*pass + 1.28205132*fla + 3.84615374*tec + 6.41025639*kop + 7.69230747*tor + 6.41025639*wei + 1.92307687*sta)/10)*(1+rou_factor*rou);
		break;


	default:
		var skillsumme = "Unknown Position";

}

		if(typeof skillsumme_str == 'undefined')
		{
			skillsumme=parseFloat(skillsumme.toFixed(2));
		}
		else{
			skillsumme=skillsumme_str;
		}
	
	//Einfuegen eines span-elements hinter FP
	var skillsumspan_HL = document.createElement("span");
	skillsumspan_HL.innerHTML="<div style=\"color: gold;\"><b>TB-Rating</b></div>";
	document.getElementsByTagName("table")[0].getElementsByTagName('tr')[zeile+skillindex_yes+7].getElementsByTagName('th')[0].appendChild(skillsumspan_HL);

	//Einfuegen eines span-elements hinter F
	var skillsumspan_value = document.createElement("span");
	skillsumspan_value.innerHTML="<div style=\"color: gold;\"><b>" + skillsumme + "</b></div>";
	document.getElementsByTagName("table")[0].getElementsByTagName('tr')[zeile+skillindex_yes+7].getElementsByTagName('td')[0].appendChild(skillsumspan_value); 

//	Bereich zum Kopieren der Skills

	var div2 = document.createElement('div');
	//div2.innerHTML="<div id=\"DB\" style=\"position: fixed; background-color: white; color: black; bottom: 2px; right: 5px; height: 35px; width: 350px; -moz-opacity: .8; text-align: left; border: 2px #333333 outset; display:inline;\">" + name + "; (" + id + "); " + pos + "; " + stae + "; " + kon + "; " + ges + "; " + man + "; " + zwe + "; " + lau + "; " + ste + "; " + pass + "; " + fla + "; " + tec + "; " + kop + "; " + tor + "; " + wei + "; " + sta + "; " + skillsumme + "; " + rou + "; " + gehalt + "; " + asi + "</div>";
	document.body.appendChild(div2);

//	var area_phy = stae + kon + ges + kop;
//	var area_tac = man + zwe + lau + ste;
	if ((pos == "D LC") || (pos == "D CR") || (pos == "D CL") || (pos == "D RC") || (pos == "D/DM L") || (pos == "D/DM C") || (pos == "D/DM R") || (pos == "DM/D L") || (pos == "DM/D C") || (pos == "DM/D R") || (pos == "D/M L") || (pos == "D/M C") || (pos == "D/M R") || (pos == "M/D L") || (pos == "M/D C") || (pos == "M/D R") || (pos == "D/OM L") || (pos == "D/OM C") || (pos == "D/OM R") || (pos == "OM/D L") || (pos == "OM/D C") || (pos == "OM/D R") || (pos == "D L, F") || (pos == "D C, F") || (pos == "D R, F") || (pos == "DM LC") || (pos == "DM CR") || (pos == "DM CL") || (pos == "DM RC") || (pos == "DM/M L") || (pos == "DM/M C") || (pos == "DM/M R") || (pos == "M/DM L") || (pos == "M/DM C") || (pos == "M/DM R") || (pos == "DM/OM L") || (pos == "DM/OM C") || (pos == "DM/OM R") || (pos == "OM/DM L") || (pos == "OM/DM C") || (pos == "OM/DM R") || (pos == "DM L, F") || (pos == "DM C, F") || (pos == "DM R, F") || (pos == "M LC") || (pos == "M CR") || (pos == "M CL") || (pos == "M RC") || (pos == "M/OM L") || (pos == "M/OM C") || (pos == "M/OM R") || (pos == "OM/M L") || (pos == "OM/M C") || (pos == "OM/M R") || (pos == "M L, F") || (pos == "M C, F") || (pos == "M R, F") || (pos == "OM LC") || (pos == "OM CR") || (pos == "OM CL") || (pos == "OM RC") || (pos == "OM L, F") || (pos == "OM C, F") || (pos == "OM R, F"))  {
		var skillworou1 = (skillsumme1)/(1+rou_factor*rou);
		var skillworou2 = (skillsumme2)/(1+rou_factor*rou);
		skillworou1 = new String(skillworou1.toFixed(2));
		skillworou2 = new String(skillworou2.toFixed(2));
		var skillworou = skillworou1 + "/" + skillworou2;
		
		var effect_rou1 = skillsumme1-skillworou1;
		var effect_rou2 = skillsumme2-skillworou2;
		effect_rou1 = new String(effect_rou1.toFixed(2));
		effect_rou2 = new String(effect_rou2.toFixed(2));
		effect_rou = effect_rou1 + "/" + effect_rou2;		
	}
	else {
		var skillworou = (skillsumme)/(1+rou_factor*rou);
		skillworou=parseFloat(skillworou.toFixed(2));
		var effect_rou = skillsumme-skillworou;
		effect_rou=parseFloat(effect_rou.toFixed(2));
	}

	switch(pos) {
		case("GK"): 
		//var area_tec = "tba";
		//var area_tac = "tba";
		//var area_phy = "tba";
		var area_tec = tec + pass + sta + abw;
		var area_phy = stae + kon + ges + tor;
		var area_tac = fla + wei + kop;
		break;
		
		default:
		var area_phy = stae + kon + ges + kop;
		var area_tac = man + zwe + lau + ste;		
		var area_tec = pass + fla + tec + tor + wei + sta;
	}
	var skillsum = area_phy + area_tec + area_tac;

	//alert(asi)
	var calc_skillsum = (Math.pow(asi, 0.152207002)/0.0268);
	calc_skillsum=parseFloat(calc_skillsum.toFixed(2));
	
	if (PlayerDataPlus == "yes") {
	
		if (PlayerDataPlusPosition == "topleft")  {
	
			var div_area = document.createElement('div');
			div_area.innerHTML="<div id=\"area\" style=\"position: fixed; z-index: 1000; background: #5F8D2D; color: #ff9900; top: 10px; right: 25px; width: 212px; padding-right: 5px; -moz-opacity: .8; text-align: middle; color: gold; border: 2px #333333 outset; display:inline;\"><p style=\"text-decoration: underline;\"><b>PlayerData+:<\p><table style=\"margin-top: -1em; margin-left: 1em; margin-bottom: 1em;\"><tr><td>PhySum: " + area_phy + " </td><td>TB-Rating: " + skillsumme + " </td></tr><tr><td>TacSum: " + area_tac + " </td><td>RouEffect: " + effect_rou + " </td></tr><tr><td>TecSum: " + area_tec + " </td><td>TB-Pure: " + skillworou + "</td></tr><tr><td>AllSum: " + skillsum + "</td></tr></table></b></div>";
			document.body.appendChild(div_area);
			
		}
		else if (PlayerDataPlusPosition == "bottomleft")  {
		
			var div_area = document.createElement('div');
			div_area.innerHTML="<div id=\"area\" style=\"position: fixed; z-index: 1000; background: #000203; color: #ff9900; bottom: 1px; left: 1px; width: 212px; padding-left: 2px; -moz-opacity: .1; text-align: left; color: gold; border: 3px #b6225a outset; display:inline;\"><p style=\"text-decoration: underline;\"><b>PlayerData+:<\p><table style=\"margin-top: -1em; margin-left: 0em; margin-bottom: 1em;\"><tr><td>PhySum: " + area_phy + " </td><td>TB-Rating: " + skillsumme + " </td></tr><tr><td>TacSum: " + area_tac + " </td><td>RouEffect: " + effect_rou + " </td></tr><tr><td>TecSum: " + area_tec + " </td><td>TB-Pure: " + skillworou + "</td></tr><tr><td>AllSum: " + skillsum + "</td></tr></table></b></div>";
			document.body.appendChild(div_area);
		}
		else {
		
			if (country == "de") {
			
				/****************************************************************************************/
				/* Inject form                                        */
				/****************************************************************************************/

				var TMDB = document.createElement("span"); // erzeugt ein html-span-tag
				
				var Tform="<form action='http://patrick-meurer.de/tmdb/trophydb.php' target='_new' accept-charset='UTF-8' method='post' style='display:inline;'>";	

				Tform=Tform+"<input name='id' type='hidden' value='"+id+"' />";
				Tform=Tform+"<input name='name' type='hidden' value='"+name+"' />";
				Tform=Tform+"<input name='alter' type='hidden' value='"+alter+"' />";
				Tform=Tform+"<input name='clubid' type='hidden' value='"+clubid+"' />";
				Tform=Tform+"<input name='country' type='hidden' value='"+country+"' />";
				Tform=Tform+"<input name='pos' type='hidden' value='"+pos+"' />";
				Tform=Tform+"<input name='skillsumme' type='hidden' value='"+skillsumme+"' />";
				Tform=Tform+"<input name='effect_rou' type='hidden' value='"+effect_rou+"' />";
				Tform=Tform+"<input name='skillworou' type='hidden' value='"+skillworou+"' />";
				Tform=Tform+"<input name='area_phy' type='hidden' value='"+area_phy+"' />";
				Tform=Tform+"<input name='area_tac' type='hidden' value='"+area_tac+"' />";
				Tform=Tform+"<input name='area_tec' type='hidden' value='"+area_tec+"' />";
				Tform=Tform+"<input name='skillsum' type='hidden' value='"+skillsum+"' />";
				Tform=Tform+"<input name='stae' type='hidden' value='"+stae+"' />";
				Tform=Tform+"<input name='kon' type='hidden' value='"+kon+"' />";
				Tform=Tform+"<input name='ges' type='hidden' value='"+ges+"' />";
				Tform=Tform+"<input name='man' type='hidden' value='"+man+"' />";
				Tform=Tform+"<input name='zwe' type='hidden' value='"+zwe+"' />";
				Tform=Tform+"<input name='lau' type='hidden' value='"+lau+"' />";
				Tform=Tform+"<input name='ste' type='hidden' value='"+ste+"' />";
				Tform=Tform+"<input name='pass' type='hidden' value='"+pass+"' />";
				Tform=Tform+"<input name='fla' type='hidden' value='"+fla+"' />";
				Tform=Tform+"<input name='tec' type='hidden' value='"+tec+"' />";
				Tform=Tform+"<input name='kop' type='hidden' value='"+kop+"' />";
				Tform=Tform+"<input name='tor' type='hidden' value='"+tor+"' />";
				Tform=Tform+"<input name='wei' type='hidden' value='"+wei+"' />";
				Tform=Tform+"<input name='sta' type='hidden' value='"+sta+"' />";
				Tform=Tform+"<input name='rou' type='hidden' value='"+rou+"' />";
				Tform=Tform+"<input name='gehalt' type='hidden' value='"+gehalt+"' />";
				Tform=Tform+"<input name='asi' type='hidden' value='"+asi+"' />";
				Tform=Tform+"<input name='status' type='hidden' value='"+status+"' />";
				Tform=Tform+"<input type='submit' name='button' value='Submit'></form><br />";
		
				var div_area = document.createElement('div');
				div_area.innerHTML="<div id=\"area\" style=\"position: absolute; z-index: 1000; width: 175px; margin-top: 25px; background: #5F8D2D; color: #ff9900; padding-left: 5px; -moz-opacity: .8; text-align: middle; color: gold; border: 2px #333333 outset; display:inline;\"><p style=\"text-decoration: underline;\"><b>PlayerData+:<\p><table style=\"margin-top: -1em; margin-bottom: 1em;\"><tr><td>PhySum: </td><td>" + area_phy + " </td></tr><tr><td>TacSum: </td><td>" + area_tac + " </td></tr><tr><td>TecSum: </td><td>" + area_tec + " </td></tr><tr><td>AllSum: </td><td>" + skillsum + "</td></tr><tr><td>&nbsp;</td></tr><tr><td>TB-Rating: </td><td>" + skillsumme + " </td></tr><tr><td>RouEffect: </td><td>" + effect_rou + " </td></tr><tr><td>TB-Pure: </td><td>" + skillworou + "</td></tr></table></b></div>";
				document.getElementsByTagName("div")[18].appendChild(div_area);
			
				var TMDB = document.createElement("span"); // erzeugt ein html-span-tag
				TMDB.innerHTML=Tform;
				document.getElementById("area").appendChild(TMDB);
			}
			else {
				var div_area = document.createElement('div');
				div_area.innerHTML="<div id=\"area\" style=\"position: absolute; z-index: 1000; width: 175px; margin-top: 25px; background: #5F8D2D; color: #ff9900; padding-left: 5px; -moz-opacity: .8; text-align: middle; color: gold; border: 2px #333333 outset; display:inline;\"><p style=\"text-decoration: underline;\"><b>PlayerData+:<\p><table style=\"margin-top: -1em; margin-bottom: 1em;\"><tr><td>PhySum: </td><td>" + area_phy + " </td></tr><tr><td>TacSum: </td><td>" + area_tac + " </td></tr><tr><td>TecSum: </td><td>" + area_tec + " </td></tr><tr><td>AllSum: </td><td>" + skillsum + "</td></tr><tr><td>&nbsp;</td></tr><tr><td>TB-Rating: </td><td>" + skillsumme + " </td></tr><tr><td>RouEffect: </td><td>" + effect_rou + " </td></tr><tr><td>TB-Pure: </td><td>" + skillworou + "</td></tr></table></b></div>";
				document.getElementsByTagName("div")[39].appendChild(div_area);			
			}
		}
	}	
	else {
	
	}

	
//	alert ("Summe: " + skillsumme)
} // if showprofile
}
if (myurl.match(/.*/))
{
/*	
function hide (member) {
        if (document.getElementById) {
            if (document.getElementById(member).style.display = "inline") {
                document.getElementById(member).style.display = "none";
            } else {
                document.getElementById(member).style.display = "inline";
            }
        }
}
*/
/*var divswitch = document.createElement('div');
appdivswitch = document.body.appendChild(divswitch);
appdivswitch.innerHTML = '<div><a href="javascript:ToggleMenu();">Menu</a></div>';
*/

if (hovermenu == "yes") {

var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};

loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

    $.noConflict();
    jQuery(document).ready(function($) {
    $('#top_menu ul li a').bind('mouseover', function() { 
		top_menu["change"]($(this).attr('top_menu'), false);
	});
  });
});

}
else  {

}


//Menu bottom right
if (menubar == "yes") {
	var div1 = document.createElement('div');
	appdiv1 = document.body.appendChild(div1);
	appdiv1.innerHTML = '<div id="menu" style="position: fixed; z-index: 1000; bottom: 30px; right: 40px; height: 30px; width: 180px; -moz-opacity: .8; text-align: left; border: 2px #333333 outset; background: url(http://www.patrick-meurer.de/tm/TrophyBuddy_menu2.png);">&nbsp;<span style="position:relative; top:5px;left:0px"><a href="https://ultra.trophymanager.com/club/"><img src="http://patrick-meurer.de/tm/trophybuddy/home.png" title="' + Home + '" style="height: 20px;"></a></span>&nbsp;&nbsp;<span style="position:relative; top:5px;left:0px"><a href="https://ultra.trophymanager.com/home/box"><img src="http://patrick-meurer.de/tm/trophybuddy/mail.png" title="' + CheckYourMails + '" style="height: 20px;"></a></span>&nbsp;&nbsp;&nbsp;<span style="position:relative; top:5px;left:0px"><a href="https://ultra.trophymanager.com/league"><img src="http://patrick-meurer.de/tm/trophybuddy/league.png" title="' + League + '" style="height: 20px;"></a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="position:relative; top:5px;left:0px"><a href="https://ultra.trophymanager.com/cup/"><img src="http://patrick-meurer.de/tm/trophybuddy/trophy.png" title="' + Cup + '" style="height: 20px;"></a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="lastspan" style="position:relative; top:5px;left:0px"><a href="http://ultra.trophymanager.com/forum/id/general/"><img src="http://static.trophymanager.com/pics/topmenu/5.png" title="' + Forum + '" style="height: 20px;"></a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="lastspan" style="position:relative; top:5px;left:0px"><a href="https://ultra.trophymanager.com/?logout"><img src="http://patrick-meurer.de/tm/trophybuddy/logout.png" title="' + Exit + '" style="height: 20px;"></a></span></div>';
}
	else {
}

if (sidebar == "yes") {
	if (myclubid == "") {
		//Navigationsbereich
		var div = document.createElement('div');
		appdiv = document.body.appendChild(div);
		appdiv.innerHTML = '<div id="tbuddy" style="position: fixed; z-index: 1000; top: 150px; left: 25px; height: 500px; width: 150px; -moz-opacity: .8; text-align: left; border: 2px #333333 outset; display:inline;"><img src="http://patrick-meurer.de/tm/TrophyBuddy23.png"><p style="text-decoration: underline;">' + Team + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/bids/" target="_self" style="font-size: 10px; color: gold;" title="' + GoCurrentBids + '">' + CurrentBids + '</a></li><li><a href="http://trophymanager.com/tactics/" target="_self" style="font-size: 10px; color: gold;" title="Go to Tactics">' + Tactics + '</a></li><li><a href="http://trophymanager.com/youth-development/" target="_self" style="font-size: 10px; color: gold;" title="' + GoYouthAcademy + '">' + YouthAcademy + '</a></li></ul><p style="text-decoration: underline;">' + Staff + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/coaches/hire/" target="_self" style="font-size: 10px; color: gold;" title="' + GoHireCoaches + '">' + HireCoaches + '</a> | <a href="http://trophymanager.com/scouts/hire/" target="_self" style="font-size: 10px; color: gold;" title="' + GoHireScouts + '">' + HireScouts + '</a></li><li><a href="http://trophymanager.com/scouts/" target="_self" style="font-size: 10px; color: gold;" title="' + GoScoutReports + '">' + ScoutReports + '</a></li><li><a href="http://trophymanager.com/coaches/" target="_self" style="font-size: 10px; color: gold;" titles="' + GoMyCoaches + '">' + MyCoaches + '</a> | <a href="http://trophymanager.com/scouts/" target="_self" style="font-size: 10px; color: gold;" titles="' + GoMyScouts + '">' + MyScouts + '</a></li></ul><p style="text-decoration: underline;">' + Training + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/player_notes/" target="_self" style="font-size: 10px; color: gold;" title="' + GoPlayerNotes + '">' + PlayerNotes + '</a></li><li><a href="http://trophymanager.com/training-overview/advanced/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTrainingOverview + '">' + TrainingOverview + '</a></li><li><a href="http://trophymanager.com/training/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTrainingTeams + '">' + TrainingTeams + '</a></li></ul><p style="text-decoration: underline;">' + Community + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/forum/" target="_self" style="font-size: 10px; color: gold;" title="' + GoForum + '">' + Forum + '</a> ( <a href="http://trophymanager.com/forum/int/transfer/" title="' + GoTransferForum + '">T</a> | <a href="http://trophymanager.com/forum/int/general/" title="' + GoGeneralForum + '">G</a> | <a href="http://trophymanager.com/forum/int/announcements/" title="' + GoAnnouncementForum + '">A</a> )</li><li><a href="http://trophymanager.com/forum/int/recent-posts/" target="_self" style="font-size: 10px; color: gold;" title="' + GoYourRecentPosts + '">' + YourRecentPosts + '</a></li><li><a href="http://trophymanager.com/user-guide/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTMUserGuide + '">' + TMUserGuide + '</a></li><li><a href="http://trophymanager.com/forum/conference/18/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTBConference + '">' + TBConference + '</a></li></ul></div>';
		//appdiv.innerHTML = '<div id="tbuddy" style="position: fixed; z-index: 1000; top: 150px; left: 25px; height: 500px; width: 150px; -moz-opacity: .8; text-align: left; border: 2px #333333 outset; display:inline;"><img src="http://patrick-meurer.de/tm/TrophyBuddy21.png"><p style="text-decoration: underline;">' + Team + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/bids/" target="_self" style="font-size: 10px; color: gold;" title="' + GoCurrentBids + '">' + CurrentBids + '</a></li><li><a href="http://trophymanager.com/tactics/" target="_self" style="font-size: 10px; color: gold;" title="Go to Tactics">' + Tactics + '</a></li><li><a href="http://trophymanager.com/youth-development/" target="_self" style="font-size: 10px; color: gold;" title="' + GoYouthAcademy + '">' + YouthAcademy + '</a></li></ul><p style="text-decoration: underline;">' + Staff + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/coaches/hire/" target="_self" style="font-size: 10px; color: gold;" title="' + GoHireCoaches + '">' + HireCoaches + '</a> | <a href="http://trophymanager.com/scouts/hire/" target="_self" style="font-size: 10px; color: gold;" title="' + GoHireScouts + '">' + HireScouts + '</a></li><li><a href="http://trophymanager.com/scouts/" target="_self" style="font-size: 10px; color: gold;" title="' + GoScoutReports + '">' + ScoutReports + '</a></li><li><a href="http://trophymanager.com/coaches/" target="_self" style="font-size: 10px; color: gold;" titles="' + GoMyCoaches + '">' + MyCoaches + '</a> | <a href="http://trophymanager.com/scouts/" target="_self" style="font-size: 10px; color: gold;" titles="' + GoMyScouts + '">' + MyScouts + '</a></li></ul><p style="text-decoration: underline;">' + Training + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/player_notes/" target="_self" style="font-size: 10px; color: gold;" title="' + GoPlayerNotes + '>' + PlayerNotes + '</a></li><li><a href="http://trophymanager.com/training-overview/advanced/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTrainingOverview + '">' + TrainingOverview + '</a></li><li><a href="http://trophymanager.com/training/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTrainingTeams + '">' + TrainingTeams + '</a></li></ul><p style="text-decoration: underline;">' + Community + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/forum/" target="_self" style="font-size: 10px; color: gold;" title="' + GoForum + '">' + Forum + '</a> ( <a href="http://trophymanager.com/forum/int/transfer/" title="' + GoTransferForum + '">T</a> | <a href="http://trophymanager.com/forum/int/general/" title="' + GoGeneralForum + '">G</a> | <a href="http://trophymanager.com/forum/int/announcements/" title="' + GoAnnouncementForum + '">A</a> | <a href="http://trophymanager.com/forum/federations" title="' + GoFederations + '">F</a> )</li><li><a href="http://trophymanager.com/user-guide/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTMUserGuide + '">' + TMUserGuide + '</a></li><li><a href="http://trophymanager.com/forum/conference/18/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTBConference + '">' + TBConference + '</a></li></ul></div>';	
	}
	else {
		if (secondaryteamid == "") {
			//Navigationsbereich
			var div = document.createElement('div');
			appdiv = document.body.appendChild(div);
			appdiv.innerHTML = '<div id="tbuddy" style="position: fixed; z-index: 1000; top: 150px; left: 25px; height: 500px; width: 150px; -moz-opacity: .8; text-align: left; border: 2px #333333 outset; display:inline;"><img src="http://patrick-meurer.de/tm/TrophyBuddy23.png"><p style="text-decoration: underline;">' + Team + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/bids/" target="_self" style="font-size: 10px; color: gold;" title="' + GoCurrentBids + '">' + CurrentBids + '</a></li><li><a href="http://trophymanager.com/club/' + myclubid + '/squad/" target="_self" style="font-size: 10px; color: gold;" title="Go to Squad">' + Squad + '</a></li><li><a href="http://trophymanager.com/tactics/" target="_self" style="font-size: 10px; color: gold;" title="Go to Tactics">' + Tactics + '</a></li><li><a href="http://trophymanager.com/youth-development/" target="_self" style="font-size: 10px; color: gold;" title="' + GoYouthAcademy + '">' + YouthAcademy + '</a></li></ul><p style="text-decoration: underline;">' + Staff + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/coaches/hire/" target="_self" style="font-size: 10px; color: gold;" title="' + GoHireCoaches + '">' + HireCoaches + '</a> | <a href="http://trophymanager.com/scouts/hire/" target="_self" style="font-size: 10px; color: gold;" title="' + GoHireScouts + '">' + HireScouts + '</a></li><li><a href="http://trophymanager.com/scouts/" target="_self" style="font-size: 10px; color: gold;" title="' + GoScoutReports + '">' + ScoutReports + '</a></li><li><a href="http://trophymanager.com/coaches/" target="_self" style="font-size: 10px; color: gold;" titles="' + GoMyCoaches + '">' + MyCoaches + '</a> | <a href="http://trophymanager.com/scouts/" target="_self" style="font-size: 10px; color: gold;" titles="' + GoMyCoaches + '">' + MyScouts + '</a></li></ul><p style="text-decoration: underline;">' + Training + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/player_notes/" target="_self" style="font-size: 10px; color: gold;" title="' + GoPlayerNotes + '">' + PlayerNotes + '</a></li><li><a href="http://trophymanager.com/training-overview/advanced/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTrainingOverview + '">' + TrainingOverview + '</a></li><li><a href="http://trophymanager.com/training/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTrainingTeams + '">' + TrainingTeams + '</a></li></ul><p style="text-decoration: underline;">' + Community + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/forum/" target="_self" style="font-size: 10px; color: gold;" title="' + GoForum + '">' + Forum + '</a> ( <a href="http://trophymanager.com/forum/int/transfer/" title="' + GoTransferForum + '">T</a> | <a href="http://trophymanager.com/forum/int/general/" title="' + GoGeneralForum + '">G</a> | <a href="http://trophymanager.com/forum/int/announcements/" title="' + GoAnnouncementForum + '">A</a> )</li><li><a href="http://trophymanager.com/forum/int/recent-posts/" target="_self" style="font-size: 10px; color: gold;" title="' + GoYourRecentPosts + '">' + YourRecentPosts + '</a></li><li><a href="http://trophymanager.com/user-guide/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTMUserGuide + '">' + TMUserGuide + '</a></li><li><a href="http://trophymanager.com/forum/conference/18/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTBConference + '">' + TBConference + '</a></li></ul></div>';
		}
		else {
			//Navigationsbereich
			var div = document.createElement('div');
			appdiv = document.body.appendChild(div);
			appdiv.innerHTML = '<div id="tbuddy" style="position: fixed; z-index: 1000; top: 150px; left: 25px; height: 500px; width: 150px; -moz-opacity: .8; text-align: left; border: 2px #333333 outset; display:inline;"><img src="http://patrick-meurer.de/tm/TrophyBuddy23.png"><p style="text-decoration: underline;">' + Team + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/bids/" target="_self" style="font-size: 10px; color: gold;" title="' + GoCurrentBids + '">' + CurrentBids + '</a></li><li><a href="http://trophymanager.com/club/' + myclubid + '/squad/" target="_self" style="font-size: 10px; color: gold;" title="Go to Squad">' + Squad + '</a> | <a href="http://trophymanager.com/club/' + secondaryteamid + '/squad/" target="_self" style="font-size: 10px; color: gold;" title="Go to Squad">' + Squad2 + '</a></li><li><a href="http://trophymanager.com/tactics/" target="_self" style="font-size: 10px; color: gold;" title="Go to Tactics">' + Tactics + '</a></li><li><a href="http://trophymanager.com/youth-development/" target="_self" style="font-size: 10px; color: gold;" title="' + GoYouthAcademy + '">' + YouthAcademy + '</a></li></ul><p style="text-decoration: underline;">' + Staff + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/coaches/hire/" target="_self" style="font-size: 10px; color: gold;" title="' + GoHireCoaches + '">' + HireCoaches + '</a> | <a href="http://trophymanager.com/scouts/hire/" target="_self" style="font-size: 10px; color: gold;" title="' + GoHireScouts + '">' + HireScouts + '</a></li><li><a href="http://trophymanager.com/scouts/" target="_self" style="font-size: 10px; color: gold;" title="' + GoScoutReports + '">' + ScoutReports + '</a></li><li><a href="http://trophymanager.com/coaches/" target="_self" style="font-size: 10px; color: gold;" titles="' + GoMyCoaches + '">' + MyCoaches + '</a> | <a href="http://trophymanager.com/scouts/" target="_self" style="font-size: 10px; color: gold;" titles="' + GoMyCoaches + '">' + MyScouts + '</a></li></ul><p style="text-decoration: underline;">' + Training + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/player_notes/" target="_self" style="font-size: 10px; color: gold;" title="' + GoPlayerNotes + '">' + PlayerNotes + '</a></li><li><a href="http://trophymanager.com/training-overview/advanced/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTrainingOverview + '">' + TrainingOverview + '</a></li><li><a href="http://trophymanager.com/training/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTrainingTeams + '">' + TrainingTeams + '</a></li></ul><p style="text-decoration: underline;">' + Community + '</p><ul style="list-style-type:disc; margin-top: 0px; padding-left: 20px;"><li><a href="http://trophymanager.com/forum/" target="_self" style="font-size: 10px; color: gold;" title="' + GoForum + '">' + Forum + '</a> ( <a href="http://trophymanager.com/forum/int/transfer/" title="' + GoTransferForum + '">T</a> | <a href="http://trophymanager.com/forum/int/general/" title="' + GoGeneralForum + '">G</a> | <a href="http://trophymanager.com/forum/int/announcements/" title="' + GoAnnouncementForum + '">A</a> )</li><li><a href="http://trophymanager.com/forum/int/recent-posts/" target="_self" style="font-size: 10px; color: gold;" title="' + GoYourRecentPosts + '">' + YourRecentPosts + '</a></li><li><a href="http://trophymanager.com/user-guide/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTMUserGuide + '">' + TMUserGuide + '</a></li><li><a href="http://trophymanager.com/forum/conference/18/" target="_self" style="font-size: 10px; color: gold;" title="' + GoTBConference + '">' + TBConference + '</a></li></ul></div>';
		}
	}
}
else {
}
}
//Transferseite

//Forum
if (myurl.match(/forum/)) {
	
	var forumcolor = "test";

	if (forumcolor == "tm") {

		var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
		loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function() {

			$.noConflict();
			jQuery(document).ready(function($) {
	 
			//$('div.text').css('font-family', 'arial');
			
			$('div.box_body').css('background-color', '#303030');
			
			
			
			$('a').css('color', 'gold');
			$('div.content_menu a').css('color', 'white');
			$('div.quote').css('background-color', '#444444');
			$('div.quote_text').css('color', '#C0C0C0');
			$('div.subtle').css('color', '#707070');
			$('div.text_fade_overlay').css('background', 'url("http://www.patrick-meurer.de/trophybuddy/background_fade.png")');
			$('div.text_fade_overlay hover').css('background', 'url("http://www.patrick-meurer.de/trophybuddy/hover_background_fade.png")');
			
			$('a.page_navigation').css('background-color', '#666666');
			$('div.page_navigation').css('background-color', '#888888');
			$('div.main_center').css('background-color', '#303C26');
			$('div.main_center').css('background', 'none');
			//$('div.background_gradient forum_topics').css('background', 'url("/pics/forum/background.png") repeat-x scroll 0 0 #578229');
			//$('div.background_gradient forum_topics').css('background-color', '#303C26');
			//$('div.background_gradient forum_topics.hover').css('background-color', 'orange');
			//$('div.background_gradient').css('background-color', '#303C26');
			//$('div.background_gradient').css('background', 'url("http://www.patrick-meurer.de/trophybuddy/background.png") repeat-x scroll 0 0 #303C26');
			$('div.background_gradient').css('background', 'repeat-x scroll 0 0 #222222');
			$('div.background_gradient').css('border-width', '3px 0 0 0');
			$('div.background_gradient').css('border-color', '#303030');
			$('div.forum_topics').css('border-style', 'outset');
			$('div.background_gradient').css('border-style', 'groove');
			$('div.actions').css('background-color', '#555555');
			$('div.user').css('background-color', '#555555');
			$('div.hidden_buttons').css('background-color', '#555555');
			$('div.background_gradient_hover').css('background-color', '#303C26');
			$('div.topic_post.hidden_buttons_wrap').css('background-color', '#666666');

		
			//.background_gradient, .background_gradient_hover
			//$('div.topic_likes').css('background-color', '#303C26');
			$('span.positive').css('background-color', 'darkgreen');
			//$('span.negative').css('background-color', 'red');
			
			});
		});

	}
	else {
	
	}
	
}