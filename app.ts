const baseUrl = "https://cahyadsn.phpindonesia.id/wilayah/inc/geo_ajax.php?id";

async function doFetch() {
  const ids = [
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    21,
    31,
    32,
    33,
    34,
    35,
    36,
    51,
    53,
    61,
    62,
    63,
    64,
    65,
    71,
    72,
    73,
    74,
    75,
    76,
    81,
    82,
    91,
    92,
  ];

  let urls = ids.map((val) => `${baseUrl}=${val}`);

  urls.forEach(async (value, index) => {
    let getUrl = await fetch(value);
    let data = await getUrl.json();
    let message = new TextEncoder().encode(JSON.stringify(data.data));
    await Deno.writeFile(`./data/original/${ids[index]}.json`, message);
  });
}

await doFetch();
