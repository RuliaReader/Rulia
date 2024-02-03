# Changelog

## 0.15.0
 - New: Http request timeout / LocalStorage / SessionStorage for plugins. [#71](https://github.com/RuliaReader/Rulia/issues/71)
 - New: Image Rotation. [#101](https://github.com/RuliaReader/Rulia/issues/101)
 - New: Add black background color for reader page. [#102](https://github.com/RuliaReader/Rulia/issues/102)
 - Update: Update the layout of the misc setting panle of the reader. [#104](https://github.com/RuliaReader/Rulia/issues/104)

## 0.14.0
 - New: Add ability to hide extension display in bookshelf. [#65](https://github.com/RuliaReader/Rulia/issues/65)
 - New: Display the background for app title bar when cursor entered it. [#88](https://github.com/RuliaReader/Rulia/issues/88)
 - New: Display cover for sub directories in bookshelf. [#92](https://github.com/RuliaReader/Rulia/issues/92)
 - New: Add ability to mix the sorting of files and directories of file list in Bookshelf. [#93](https://github.com/RuliaReader/Rulia/issues/93)
 - New: Image Super Resolution. [#95](https://github.com/RuliaReader/Rulia/issues/95)
 - Update: Escape pod (ALT+Q) is now included as part of the free features. [#96](https://github.com/RuliaReader/Rulia/issues/96)

## 0.13.1
 - Fix: The bug introduced in the previous version that caused a decrease in performance when reading mobi files. [#90](https://github.com/RuliaReader/Rulia/issues/90)

## 0.13.0
 - New: Thumbnail caching. [#19](https://github.com/RuliaReader/Rulia/issues/19)
 - New: Add avif support. [#81](https://github.com/RuliaReader/Rulia/issues/81)
 - Update: File dropping & directories dropping are available to the free version now. [#82](https://github.com/RuliaReader/Rulia/issues/82)
 - Update: Drop the support of solid archive files. **This is a breaking change**, please read: [#83](https://github.com/RuliaReader/Rulia/issues/83)
 - Update: Refactor the IO module to improve the loading speed. [#84](https://github.com/RuliaReader/Rulia/issues/84)
 - Update: Remove the filemeta building context menu from the bookshelf. [#85](https://github.com/RuliaReader/Rulia/issues/85)

## 0.12.0
 - Update: Update bookshelf alias editing. [#76](https://github.com/RuliaReader/Rulia/issues/76)
 - Update: Read cover from first file by default if there is no specific cover file. [#77](https://github.com/RuliaReader/Rulia/issues/77)
 - Update: Optimize the performance of loading archive files. This is a breaking change, please read: [#78](https://github.com/RuliaReader/Rulia/issues/78)
 - Update: Disable metadata analysis when adding a new item to bookshelf. [#79](https://github.com/RuliaReader/Rulia/issues/79)
 - Fix: Incorrect current reading indicator on subdirectory. [#57](https://github.com/RuliaReader/Rulia/issues/57)
 - Fix: Bookshelf isn't refreshed after switching profile in setting page. [#67](https://github.com/RuliaReader/Rulia/issues/67)
 - Fix: Remove type checking for thumbnail loading. [#73](https://github.com/RuliaReader/Rulia/issues/73)
 - Fix: Incorrect plugin list order. [#74](https://github.com/RuliaReader/Rulia/issues/74)

## 0.11.0
 - New: Plugin system. [#58](https://github.com/RuliaReader/Rulia/issues/58)
 - New: Reading History page. [#60](https://github.com/RuliaReader/Rulia/issues/60)
 - Update: Auto refresh bookshelf after certain options changed. [#59](https://github.com/RuliaReader/Rulia/issues/59)
 - Update: Optimize task cancellation in folder page for better performance. [#61](https://github.com/RuliaReader/Rulia/issues/61)
 - Update: Optimize folder page loading speed. [#62](https://github.com/RuliaReader/Rulia/issues/62)
 - Update: Optimize gamepad control in bookshelf page. [#63](https://github.com/RuliaReader/Rulia/issues/63)
 - Fix: Include subdirectory count in the displayed number for each bookshelf item. [#56](https://github.com/RuliaReader/Rulia/issues/56)
 - Fix: Incorrect image order from solid rar files. [#66](https://github.com/RuliaReader/Rulia/issues/66)

## 0.10.1
 - Fix: An issue in bookshelf where subdirectories cannot be accessed in some cases. [#55](https://github.com/RuliaReader/Rulia/issues/55)

## 0.10.0
 - New: Sub folder access support in bookshelf. You can enable it in setting page. [#37](https://github.com/RuliaReader/Rulia/issues/37)
 - New: Ability to follow system theme. [#40](https://github.com/RuliaReader/Rulia/issues/40)
 - Update: Include file extension in the text of continue button in bookshelf folder page. [#53](https://github.com/RuliaReader/Rulia/issues/53)
 - Update: Update layout of the setting page. [#54](https://github.com/RuliaReader/Rulia/issues/54)

## 0.9.0
 - New: Mobi format support. [#22](https://github.com/RuliaReader/Rulia/issues/22) (Get more information about mobi from this link)
 - New: You can specify starting page. [#49](https://github.com/RuliaReader/Rulia/issues/49)
 - Update: Optimize dialog popping up code in reader page. [#50](https://github.com/RuliaReader/Rulia/issues/50)
 - Fix: Wrong I18n text for unknown exception in reader page. [#51](https://github.com/RuliaReader/Rulia/issues/51)

## 0.8.1
 - Fix: No images were retrieved when reading some epubs that do contain images. [#48](https://github.com/RuliaReader/Rulia/issues/48)

## 0.8.0
 - New: EPub format support. [#22](https://github.com/RuliaReader/Rulia/issues/22) (Get more information about epub from this link)
 - New: Ability to save images. [#39](https://github.com/RuliaReader/Rulia/issues/39)
 - Update: Focus to reader after UI was closed. [#41](https://github.com/RuliaReader/Rulia/issues/41)
 - Update: Refactor reader image disposing & closing. [#46](https://github.com/RuliaReader/Rulia/issues/46)
 - Fix: Unable to load image from JPG variants. [#43](https://github.com/RuliaReader/Rulia/issues/43)
 - Fix: ImageBytes passed to noise reduction processor was empty in some cases. [#44](https://github.com/RuliaReader/Rulia/issues/44)
 - Fix: Cannot open encrypted arichives from bookshelf after their file meta analysis. [#47](https://github.com/RuliaReader/Rulia/issues/47)

## 0.7.0
 - New: Add ability to turn off rendering size restriction. [#29](https://github.com/RuliaReader/Rulia/issues/29)
 - New: Minimal Control panel for one-hand operation. [#36](https://github.com/RuliaReader/Rulia/issues/36)
 - Update: Now bookshelf page will keep alive. [#33](https://github.com/RuliaReader/Rulia/issues/33)
 - Fix: Incorrect image splitting size. [#38](https://github.com/RuliaReader/Rulia/issues/38)

## 0.6.0
 - New: Tar support. [#27](https://github.com/RuliaReader/Rulia/issues/27)
 - Update: Hide Mica Option on Windows 10. [#28](https://github.com/RuliaReader/Rulia/issues/28)
 - Update: Optimize loading speed. [#31](https://github.com/RuliaReader/Rulia/issues/31)
 - Fix: Minor fixing on FileMeta caching. [#32](https://github.com/RuliaReader/Rulia/issues/32)
 - Fix: Solid RAR causes some functions to break [#35](https://github.com/RuliaReader/Rulia/issues/35)

## 0.5.0
 - New: Japanese localization. [#2](https://github.com/RuliaReader/Rulia/issues/2)
 - New: Battery Indicator will show up in reader page if the device has a battery. [#11](https://github.com/RuliaReader/Rulia/issues/11)
 - New: Blank area trimming. [#26](https://github.com/RuliaReader/Rulia/issues/26)
 - New: Lab added. Now it comes with a BookReader.

## 0.4.1
 - New: Metadata caching mechanic. [#19](https://github.com/RuliaReader/Rulia/issues/19)
 - Update: Update app icon. [#21](https://github.com/RuliaReader/Rulia/issues/21)
 - Fix: Cover images in folder page should be darker in dark mode. [#24](https://github.com/RuliaReader/Rulia/issues/24)
 - Fix: Fix an exception which occurs during the loading process of solid RAR archives. [#25](https://github.com/RuliaReader/Rulia/issues/25)

## 0.4.0
 - New: Add bookshelf and last read to jump list. [#16](https://github.com/RuliaReader/Rulia/issues/16)
 - New: Add PDF support. [#18](https://github.com/RuliaReader/Rulia/issues/18)
 - Update: Replace filter icon in bookshelf with magnifier to make it obvious. [#14](https://github.com/RuliaReader/Rulia/issues/14)
 - Update: Optimize bookshelf file loading visual display to make it feels better. [#15](https://github.com/RuliaReader/Rulia/issues/15)
 - Update: Optimize file loading speed [#17](https://github.com/RuliaReader/Rulia/issues/17)
 - Fix: The end page in Infinity vertical scrolling mode won't be incorrectly scaled. [#10](https://github.com/RuliaReader/Rulia/issues/10)
 - Fix: Make links in change log clickable [#13](https://github.com/RuliaReader/Rulia/issues/13)

## 0.3.0
 - New: Now Rulia can suggest aliases for you based on the directory path in Bookshelf. [#3](https://github.com/RuliaReader/Rulia/issues/3)
 - New: You can limit the max width in Infinity Vertical Scrolling Mode [#6](https://github.com/RuliaReader/Rulia/issues/6)
 - New: Now Rulia can make the first image from first archive as the Bookshelf cover. You can enable it in Settting Page. [#7](https://github.com/RuliaReader/Rulia/issues/7)
 - Fix: Fix a rare NullReferenceException in Bookshelf Folder Page. [#1](https://github.com/RuliaReader/Rulia/issues/1)
 - Fix: Add missing ZhHant translation to Reader UI and Full feature list. [#4](https://github.com/RuliaReader/Rulia/issues/4)
 - Fix: Fixed an issue where the cover would not load automatically when there are too many files in bookshelf folder. [#5](https://github.com/RuliaReader/Rulia/issues/5)
 - Fix: Incorrect thumbnail display in bookshelf folder page. [#8](https://github.com/RuliaReader/Rulia/issues/8)

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

