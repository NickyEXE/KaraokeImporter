This project is available online at http://singwithnicky.herokuapp.com

## Sing With Nicky

This app allows you to upload your Spotify playlists and then it will slowly scrape SingSingMedia.com/search so you can get the song codes to your favorite songs in the karaoke song book that serves most of New York City.

It also allows you to view existing playlists and search through a large collection of songs that have been previously scraped, and look at lyrics and listen to any song added.

## Behind-the-Scenes

To compensate for the issue that Sing Sing Media's only public-facing access to its database is a search bar that accepts one query at a time and that it times out if you ping it too many times too quickly, this works with a [rails backend](https://github.com/NickyEXE/KaraokeCodeGrabber) to scrape as a background process while providing updates to the client via websockets.

It makes several educated guesses using fuzzy string matching and some string filtering to align songs from Spotify playlists with their relevant song listings in the karaoke database, and allows users to update songs if it makes a mistake.
