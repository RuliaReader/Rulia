# Changelog

## 0.10.1
 - Fix: An issue in bookshelf where subdirectories cannot be accessed in some cases. [#55](https://github.com/LancerComet/RuliaReader/issues/55)

## 0.10.0
 - New: Subdirectories access support in bookshelf. You can enable it in setting page. [#37](https://github.com/LancerComet/RuliaReader/issues/37)
 - New: Ability to follow system theme. [#40](https://github.com/LancerComet/RuliaReader/issues/40)
 - Update: Include file extension in the text of continue button in bookshelf folder page. [#53](https://github.com/LancerComet/RuliaReader/issues/53)
 - Update: Update layout of the setting page. [#54](https://github.com/LancerComet/RuliaReader/issues/54)

## 0.9.0
 - New: Mobi format support. [#22](https://github.com/LancerComet/RuliaReader/issues/22) (Get more information about mobi from this link)
 - New: You can specify starting page. [#49](https://github.com/LancerComet/RuliaReader/issues/49)
 - Update: Optimize dialog popping up code in reader page. [#50](https://github.com/LancerComet/RuliaReader/issues/50)
 - Fix: Wrong I18n text for unknown exception in reader page. [#51](https://github.com/LancerComet/RuliaReader/issues/51)

## 0.8.1
 - Fix: No images were retrieved when reading some epubs that do contain images. [#48](https://github.com/LancerComet/RuliaReader/issues/48)

## 0.8.0
 - New: EPub support. [#22](https://github.com/LancerComet/RuliaReader/issues/22) (This feature is in early stage.)
 - New: Ability to save images. [#39](https://github.com/LancerComet/RuliaReader/issues/39)
 - Update: Focus to reader after UI was closed. [#41](https://github.com/LancerComet/RuliaReader/issues/41)
 - Update: Refactor reader image disposing & closing. [#46](https://github.com/LancerComet/RuliaReader/issues/46)
 - Fix: Unable to load image from JPG variants. [#43](https://github.com/LancerComet/RuliaReader/issues/43)
 - Fix: ImageBytes passed to noise reduction processor was empty in some cases. [#44](https://github.com/LancerComet/RuliaReader/issues/44)
 - Fix: Cannot open encrypted arichives from bookshelf after their file meta analysis. [#47](https://github.com/LancerComet/RuliaReader/issues/47)

## 0.7.0
 - New: Add ability to turn off rendering size restriction. [#29](https://github.com/LancerComet/RuliaReader/issues/29)
 - New: Minimal Control panel for one-hand operation. [#36](https://github.com/LancerComet/RuliaReader/issues/36)
 - Update: Now bookshelf page will keep alive. [#33](https://github.com/LancerComet/RuliaReader/issues/33)
 - Fix: Incorrect image splitting size. [#38](https://github.com/LancerComet/RuliaReader/issues/38)

## 0.6.0
 - New: Tar support. [#27](https://github.com/LancerComet/RuliaReader/issues/27)
 - Update: Hide Mica Option on Windows 10. [#28](https://github.com/LancerComet/RuliaReader/issues/28)
 - Update: Optimize loading speed. [#31](https://github.com/LancerComet/RuliaReader/issues/31)
 - Fix: Minor fixing on FileMeta caching. [#32](https://github.com/LancerComet/RuliaReader/issues/32)
 - Fix: Solid RAR causes some functions to break [#35](https://github.com/LancerComet/RuliaReader/issues/35)

## 0.5.0
 - New: Japanese localization. [#2](https://github.com/LancerComet/RuliaReader/issues/2)
 - New: Battery Indicator will show up in reader page if the device has a battery. [#11](https://github.com/LancerComet/RuliaReader/issues/11)
 - New: Blank area trimming. [#26](https://github.com/LancerComet/RuliaReader/issues/26)
 - New: Lab added. Now it comes with a BookReader.

## 0.4.1
 - New: Metadata caching mechanic. [#19](https://github.com/LancerComet/RuliaReader/issues/19)
 - Update: Update app icon. [#21](https://github.com/LancerComet/RuliaReader/issues/21)
 - Fix: Cover images in folder page should be darker in dark mode. [#24](https://github.com/LancerComet/RuliaReader/issues/24)
 - Fix: Fix an exception which occurs during the loading process of solid RAR archives. [#25](https://github.com/LancerComet/RuliaReader/issues/25)

## 0.4.0
 - New: Add bookshelf and last read to jump list. [#16](https://github.com/LancerComet/RuliaReader/issues/16)
 - New: Add PDF support. [#18](https://github.com/LancerComet/RuliaReader/issues/18)
 - Update: Replace filter icon in bookshelf with magnifier to make it obvious. [#14](https://github.com/LancerComet/RuliaReader/issues/14)
 - Update: Optimize bookshelf file loading visual display to make it feels better. [#15](https://github.com/LancerComet/RuliaReader/issues/15)
 - Update: Optimize file loading speed [#17](https://github.com/LancerComet/RuliaReader/issues/17)
 - Fix: The end page in Infinity vertical scrolling mode won't be incorrectly scaled. [#10](https://github.com/LancerComet/RuliaReader/issues/10)
 - Fix: Make links in change log clickable [#13](https://github.com/LancerComet/RuliaReader/issues/13)

## 0.3.0
 - New: Now Rulia can suggest aliases for you based on the directory path in Bookshelf. [#3](https://github.com/LancerComet/RuliaReader/issues/3)
 - New: You can limit the max width in Infinity Vertical Scrolling Mode [#6](https://github.com/LancerComet/RuliaReader/issues/6)
 - New: Now Rulia can make the first image from first archive as the Bookshelf cover. You can enable it in Settting Page. [#7](https://github.com/LancerComet/RuliaReader/issues/7)
 - Fix: Fix a rare NullReferenceException in Bookshelf Folder Page. [#1](https://github.com/LancerComet/RuliaReader/issues/1)
 - Fix: Add missing ZhHant translation to Reader UI and Full feature list. [#4](https://github.com/LancerComet/RuliaReader/issues/4)
 - Fix: Fixed an issue where the cover would not load automatically when there are too many files in bookshelf folder. [#5](https://github.com/LancerComet/RuliaReader/issues/5)
 - Fix: Incorrect thumbnail display in bookshelf folder page. [#8](https://github.com/LancerComet/RuliaReader/issues/8)

## 0.2.1
 - New: Add support for `.cbr`, `.cbz`.
 - New: Add a new type of view mode which displays image in bookshelf folder.
 - Update: Minor changes on UI.

## 0.2.0
 - New: Add Traditional Chinese.
 - Fix: Fix incorrect translation.

## 0.1.2
 - Fix: Fix a display issue on purchase restoring.

## 0.1.1
 - Fix: Fix incorrect list style in Windows 10.
 - Fix: Fix incorrect icon displaying.
 - Update: Be compatible with some broken images.

## 0.1.0
 - Initial release.
