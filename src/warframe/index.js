import axios from 'axios'

const promocodes = [
  'CONCLAVEDISCORD',
  'ORPHEUSDELUXE',
  'TIOMARIO',
  'GERMANCOMMUNITYDISCORD',
  'RIPPZOR',
  'POKKETNINJA',
  'SERDARSARI',
  'TANCHAN',
  'AMPROV',
  'TINBEARS',
  'VOIDFISSUREBR',
  'SNOWRC',
  'TOXICKTOE',
  'SMOODIE',
  'SAPMATIC',
]

promocodes.forEach(code => {
  axios.post('https://www.warframe.com/promocode', {
    _token: 'a7WEVxKQGdRWegWvZVKw71UhzxGfde7bM9iqn2ir',
    code,
  }, {
    headers: {
      Cookie: 'warframe_session=p6y3cPsVsApvX0WkdM9EnbUJQktrkHLf5jeVB28c; country_code=CN; gid=58d4c9083ade7f0e7d355cfe; logsig=10873c8943776aa0f0ac4939c0f6955b;' +
        ' email=kimihiro%40live.cn; signed-in=1; wf-rbcheck=eyJpdiI6InJTdmY0YWFoSXUxdyswZ1FhYzRSWXc9PSIsInZhbHVlIjoiXC9NVDRLMGk0aktrNThGb2Fvamt3UExSbjBFbXlnc21ncjNwQ3dZdVJoTzg9IiwibWFjIjoiM2Y1NmJkYTBkZjk5MWNkNzlhYWE5MjZjZjViMTIzMmE3ZjlkNzJlNjUwZjcyNjJiMjY0M2VmMmEwNDRhNDBjZCJ9; XSRF-TOKEN=eyJpdiI6IlwvMHBnalduSThEYWxVTTRVaXpLMjVBPT0iLCJ2YWx1ZSI6IkhaS09kbHA0NXpycVU0aXF4MFZlZVlEcTMrTVlDSjF6SXBGRHoxdzVqbklkQ2JFbmZWazVGeDRKSXcxYlBXa2wiLCJtYWMiOiIzNmIxMzkwMGYxZGZlMzIyZGIyZTUzN2M2ZTY2YjczMjg3OGI5MGI0ZDlmZDU4ZDM0YWQ0Mjk0NDdiOGVmZjFhIn0%3D;',
    },
  }).then(res => {
    console.log(res.status, res.data)
  })
})

