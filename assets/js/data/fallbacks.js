const fallbackDriverStandings = [
  { position_current: 1, driver_number: 12, full_name: "Kimi Antonelli", team_name: "Mercedes", points_current: 100, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/ANDANT01_Kimi_Antonelli/andant01.png.transform/1col/image.png" },
  { position_current: 2, driver_number: 63, full_name: "George Russell", team_name: "Mercedes", points_current: 80, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png" },
  { position_current: 3, driver_number: 16, full_name: "Charles Leclerc", team_name: "Ferrari", points_current: 63, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png" },
  { position_current: 4, driver_number: 1, full_name: "Lando Norris", team_name: "McLaren", points_current: 51, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png" },
  { position_current: 5, driver_number: 44, full_name: "Lewis Hamilton", team_name: "Ferrari", points_current: 49, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png" },
  { position_current: 6, driver_number: 81, full_name: "Oscar Piastri", team_name: "McLaren", points_current: 43, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png" },
  { position_current: 7, driver_number: 3, full_name: "Max Verstappen", team_name: "Red Bull Racing", points_current: 26, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png" },
  { position_current: 8, driver_number: 87, full_name: "Oliver Bearman", team_name: "Haas F1 Team", points_current: 17, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/1col/image.png" },
  { position_current: 9, driver_number: 10, full_name: "Pierre Gasly", team_name: "Alpine", points_current: 16, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png" },
  { position_current: 10, driver_number: 30, full_name: "Liam Lawson", team_name: "Racing Bulls", points_current: 10, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/1col/image.png" },
  { position_current: 11, driver_number: 43, full_name: "Franco Colapinto", team_name: "Alpine", points_current: 5, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png.transform/1col/image.png" },
  { position_current: 12, driver_number: 41, full_name: "Arvid Lindblad", team_name: "Racing Bulls", points_current: 4, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ARVLIN01_Arvid_Lindblad/arvlin01.png.transform/1col/image.png" },
  { position_current: 13, driver_number: 6, full_name: "Isack Hadjar", team_name: "Red Bull Racing", points_current: 4, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png.transform/1col/image.png" },
  { position_current: 14, driver_number: 55, full_name: "Carlos Sainz", team_name: "Williams", points_current: 4, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png" },
  { position_current: 15, driver_number: 5, full_name: "Gabriel Bortoleto", team_name: "Audi", points_current: 2, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png.transform/1col/image.png" },
  { position_current: 16, driver_number: 31, full_name: "Esteban Ocon", team_name: "Haas F1 Team", points_current: 1, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png" },
  { position_current: 17, driver_number: 23, full_name: "Alexander Albon", team_name: "Williams", points_current: 1, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png" },
  { position_current: 18, driver_number: 27, full_name: "Nico Hulkenberg", team_name: "Audi", points_current: 0, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png" },
  { position_current: 19, driver_number: 77, full_name: "Valtteri Bottas", team_name: "Cadillac", points_current: 0, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png" },
  { position_current: 20, driver_number: 11, full_name: "Sergio Perez", team_name: "Cadillac", points_current: 0, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png" },
  { position_current: 21, driver_number: 14, full_name: "Fernando Alonso", team_name: "Aston Martin", points_current: 0, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png" },
  { position_current: 22, driver_number: 18, full_name: "Lance Stroll", team_name: "Aston Martin", points_current: 0, headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png" }
];

const fallbackConstructorStandings = [
  { position_current: 1, team_name: "Mercedes", points_current: 180 },
  { position_current: 2, team_name: "Ferrari", points_current: 112 },
  { position_current: 3, team_name: "McLaren", points_current: 94 },
  { position_current: 4, team_name: "Red Bull Racing", points_current: 30 },
  { position_current: 5, team_name: "Alpine", points_current: 21 },
  { position_current: 6, team_name: "Haas F1 Team", points_current: 18 },
  { position_current: 7, team_name: "Racing Bulls", points_current: 14 },
  { position_current: 8, team_name: "Williams", points_current: 5 },
  { position_current: 9, team_name: "Audi", points_current: 2 },
  { position_current: 10, team_name: "Cadillac", points_current: 0 },
  { position_current: 11, team_name: "Aston Martin", points_current: 0 }
];