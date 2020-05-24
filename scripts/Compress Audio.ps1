dir ../www/Sound -recurse -include *.mp3 | %{echo $_.FullName} | %{&ffmpeg -i $_ -vn -ar 44100 -ac 2 -ab 128 -f mp3 $_'hehe'}
# %{convert  $_.FullName -resize 620x620 "R:\processed\$_"}
