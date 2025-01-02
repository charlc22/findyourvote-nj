INSERT INTO House_Candidates 
(District_ID, Name, Party, Incumbent, Election_Year, Biography, Website, Contact_Info, Image_URL)
VALUES 
(1, 'Donald Norcross', 'Democratic', 1, 2024,
 'Born and raised in South Jersey, Donald is an electrician by trade and a proud union member. In Congress, he is committed to improving the lives of working families by focusing on the issues that matter most to them: raising wages and strengthening our economy, ensuring affordable access to a high-quality education, and supporting the brave men and women that protect our nation and our neighborhoods.
He knows firsthand what it’s like to be a single parent having to balance work, family life and a checkbook. Donald began his career working for minimum wage, and his on-the-job experiences shape his work in Congress. Donald has been a fierce advocate for raising wages for workers, leading the House of Representatives to pass legislation that would gradually raise the federal minimum wage to $15 an hour by 2025.
When construction work was slow or he was injured on the job, he was thankful for unemployment and disability insurance and knows what it is like to rely on these important resources. Since then, Donald has fought to lower prescription drug prices and ensure that everyone has access to affordable, quality healthcare, so that no one is forced to choose between putting dinner on the table or taking their medication.
Donald spent his career as an electrician connecting power to New Jersey businesses and industrial sites. He rose through the ranks and eventually became a business agent for the International Brotherhood of Electrical Workers Local 351, as well as President of the Southern New Jersey AFL-CIO, where he advocated on behalf of thousands of hardworking men and women for nearly 20 years.
As a graduate of a Registered Apprenticeship program, Donald knows we need to advance job-training programs in America, and he also understands the value of a good education that doesn’t break the bank. As a former apprentice himself, Donald led the House in passing the National Apprenticeship Act, expanding access to skills training and connecting workers with stable, good-paying jobs. As a member of the New Jersey Legislature, he played a key role in historic higher education reforms that established New Jersey as a medical education and research hub.
As a member of the House Committee on Education and the Workforce, Donald is working to raise wages, protect the middle class, strengthen workplace protections and achieve equal pay and paid leave for those raising families. He also serves on the House Armed Services Committee (HASC) and is the ranking member of HASC’s Subcommittee on Tactical Air and Land Forces (TAL). Here, he focuses on protecting our national security, supporting service members and veterans and strengthening New Jersey’s Joint Base McGuire-Dix-Lakehurst, which is set to receive a new fleet of KC-46 air refueling tankers – an effort pushed for by Donald.
Donald serves as the Vice Chair and Liaison to Labor for the Congressional Progressive Caucus. House Speaker Nancy Pelosi has appointed him to be the Parliamentarian for the Democratic Steering and Policy Committee, and he was one of four House Democrats appointed to the Joint Select Committee on Multiemployer Pensions to work on solutions for America’s retirement security crisis. He is also the co-founder of the Labor Caucus and the Building Trades Caucus.
Donald and his wife Andrea live in Camden City and are the proud parents of three adult children and grandparents of three.',
 'https://norcross.house.gov',
 ' Washington, DC Office: (202) 225-6501
   Camden Office: (856) 427-7000
   Cherry Hill Office: (856) 427-7000',
 'https://norcross.house.gov/index.cfm?a=Files.Serve&File_id=72A709F3-3152-4C9F-BEC5-B5A308348D34');

 select * from House_Candidates;

 DELETE FROM House_Candidates WHERE Candidate_ID = 13;

 DBCC CHECKIDENT ('House_Candidates', RESEED, 0);

 INSERT INTO House_Candidates 
(District_ID, Name, Party, Incumbent, Election_Year, Biography, Website, Contact_Info, Image_URL)
VALUES 
(1, 'Theodore "Teddy" Liddell', 'Republican', 0, 2024,
 'As a West Point graduate, a former U.S. Army Captain, and current attorney, Teddy Liddell is running for U.S. Congress in the 1st Congressional District of New Jersey.
The nation, as widely reported, is facing multifaceted crises. These include soaring inflation, escalating food and gas prices, unchecked turmoil at the border, misuse of taxpayer funds for displaced illegal immigrants, and rising urban violence. The urgency to devise positive solutions is paramount, necessitating servant leadership that prioritizes the welfare of the people. Teddy Liddell embodies such leadership.
Born in Chicago, Illinois, into a family led by a pastor and federal police officer father, and a teacher and school administrator mother, Teddy was nurtured in an environment that championed service to family, community, and country. His life is driven by a commitment to righteousness, assistance to others, and excellence in all endeavors. He upholds that leadership''s core attributes extend beyond passion to include integrity, humility, courage, and service.
At the young age of seventeen, Teddy received an extremely competitive U.S. Congressional nomination to attend the United States Military Academy Preparatory School then located at Fort Monmouth, New Jersey and graduated from West Point as a U.S. Army commissioned officer five years later. After almost 6 years of honorable military service, Teddy voluntarily resigned his commission. He later earned a MBA from Columbia College and a JD from St. Louis University School of Law. 
As an attorney licensed in Illinois and New Jersey, Teddy''s 15-year legal career has been dedicated to serving major corporations in the biopharmaceutical, medical device, and nutrition sectors. Teddy currently manages his own solo law practice.
What the community urgently requires is a servant leader capable of inspiring positive change and finding solutions to pressing issues. True leadership is characterized by a service-oriented heart and humility in every action. With numerous community needs awaiting to be addressed, Teddy is confident in making a substantial, positive impact and advocating for all residents.
Teddy, his wife, and their six children have been residents of Gloucester Township, New Jersey for almost fourteen years.', 
 'https://teddyliddellforcongress.com', 
 '(856) 290-7374
  P.O. Box: 1513 Laurel Springs, NJ 08021', 
 'https://teddyliddellforcongress.com/wp-content/uploads/2024/02/IMG_5518.jpg');

 INSERT INTO House_Candidates 
(District_ID, Name, Party, Incumbent, Election_Year, Biography, Website, Contact_Info, Image_URL)
VALUES 
(1, 'Robin Brownfield', 'Green', 0, 2024, 
'Robin Brownfield who lives in Collingswood, NJ, is a former organizer for the United Farm Workers, and an adjunct sociology and labor studies professor at Rutgers University, Rowan University, and numerous community colleges. With the American Federation of Teachers, she has helped organize several union locals for adjunct professors in colleges and universities in New Jersey, and served on the contract bargaining committees as a Vice President in three of those bargaining units. 
The daughter of a Jewish father and Filipino-American mother, she is also a well-known artist in the Philadelphia area, as well as an activist opposing racism. She is currently active in actions organized by South Jersey for Gaza, calling for a permanent ceasefire in Gaza and the West Bank and an end to the genocide of Palestinian people being committed by the Israeli government. 
She is opposing AIPAC-funded Congressman Donald Norcrosss in New Jersey Congressional District 1. ', 
' https://www.robinbrownfield4congress2024.com/', 
'No official campaign office.
 Social Media: x.com @RobinBrownfield', 
'https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/rbrownfield2.png');

INSERT INTO House_Candidates 
(District_ID, Name, Party, Incumbent, Election_Year, Biography, Website, Contact_Info, Image_URL)
VALUES 
(1, 'Austin Johnson', 'Independent', 0, 2024, 
'Austin Johnson attended Rowan University. His career experience includes working as a janitor and in retail, education, and sales.', 
'https://austinjohnsonnj.com', 
'No official campaign office.
Social Media: x.com @AJ4NJ2024', 
'https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Austin_Johnson_20240907_030958.png');

DELETE FROM House_Candidates;
