dir ../www/Images -recurse -include *.png | %{echo $_.FullName} | %{&pngquant -f --skip-if-larger $_ --ext .png}

# %{convert  $_.FullName -resize 620x620 "R:\processed\$_"}
