window.setTimeout( function() {
  window.location.reload();
}, 10000);

/* Hours: */
one = [56,57,58,59]
two = [63,64,65,66]
three = [67,68,69,70]
four = [74,75,76,77]
five = [52,53,54,55]
six = [78,79,80,81,82]
seven = [89,90,91,92,93,94]
eight = [85,86,87,88]
nine = [103,104,105,106]
ten = [100,101,102,103]
eleven = [50,51,52]
twelve = [95,96,97,98,99]

/* Markers */
oclock = [108,109,110]
fivemin = [8,9,10,11]
tenmin = [12,13,14,15]
quarter = [27,28,29,30,31,32,33]
twentymin = [16,17,18,19,20,21,22]
threequarter = [23,24,25,26,27,28,29,30,31,32,33]
half = [45,46,47,48]
before = [34,35,36]
after = [41,42,43,44]


time = (new Date().getHours()) +":"+ (new Date().getMinutes())

switch(time){
/* #region 1th Hour */
  case "1:0" :
  case "1:1" :
  case "1:2" :
  case "1:3" :
  case "1:4" :
    string = (one+","+oclock)
  break;
  case "1:5" :
  case "1:6" :
  case "1:7" :
  case "1:8" :
  case "1:9" :
    string = (fivemin+","+after+","+one)
  break;
  case "1:10" :
  case "1:11" :
  case "1:12" :
  case "1:13" :
  case "1:14" :
    string = (tenmin+","+after+","+one)
  break;
  case "1:15" :
  case "1:16" :
  case "1:17" :
  case "1:18" :
  case "1:19" :
    string = (quarter+","+after+","+one)
  break;
  case "1:20" :
  case "1:21" :
  case "1:22" :
  case "1:23" :
  case "1:24" :
    string = (twentymin+","+after+","+one)
  break;
  case "1:25" :
  case "1:26" :
  case "1:27" :
  case "1:28" :
  case "1:29" :
    string = (fivemin+","+before+","+half+","+two)
  break;
  case "1:30" :
  case "1:31" :
  case "1:32" :
  case "1:33" :
  case "1:34" :
    string = (half+","+two)
  break;
  case "1:35" :
  case "1:36" :
  case "1:37" :
  case "1:38" :
  case "1:39" :
    string = (fivemin+","+after+","+half+","+two)
  break;
  case "1:40" :
  case "1:41" :
  case "1:42" :
  case "1:43" :
  case "1:44" :
    string = (tenmin+","+after+","+half+","+two)
  break;
  case "1:45" :
  case "1:46" :
  case "1:47" :
  case "1:48" :
  case "1:49" :
    string = (quarter+","+before+","+two)
  break;
  case "1:50" :
  case "1:51" :
  case "1:52" :
  case "1:53" :
  case "1:54" :
    string = (tenmin+","+before+","+two)
  break;
  case "1:55" :
  case "1:56" :
  case "1:57" :
  case "1:58" :
  case "1:59" :
    string = (fivemin+","+before+","+two)
  break;
/* #endregion */
/* #region 2th Hour */
  case "2:0" :
  case "2:1" :
  case "2:2" :
  case "2:3" :
  case "2:4" :
    string = (two+","+oclock)
  break;
  case "2:5" :
  case "2:6" :
  case "2:7" :
  case "2:8" :
  case "2:9" :
    string = (fivemin+","+after+","+two)
  break;
  case "2:10" :
  case "2:11" :
  case "2:12" :
  case "2:13" :
  case "2:14" :
    string = (tenmin+","+after+","+two)
  break;
  case "2:15" :
  case "2:16" :
  case "2:17" :
  case "2:18" :
  case "2:19" :
    string = (quarter+","+after+","+two)
  break;
  case "2:20" :
  case "2:21" :
  case "2:22" :
  case "2:23" :
  case "2:24" :
    string = (twentymin+","+after+","+two)
  break;
  case "2:25" :
  case "2:26" :
  case "2:27" :
  case "2:28" :
  case "2:29" :
    string = (fivemin+","+before+","+half+","+three)
  break;
  case "2:30" :
  case "2:31" :
  case "2:32" :
  case "2:33" :
  case "2:34" :
    string = (half+","+three)
  break;
  case "2:35" :
  case "2:36" :
  case "2:37" :
  case "2:38" :
  case "2:39" :
    string = (fivemin+","+after+","+half+","+three)
  break;
  case "2:40" :
  case "2:41" :
  case "2:42" :
  case "2:43" :
  case "2:44" :
    string = (tenmin+","+after+","+half+","+three)
  break;
  case "2:45" :
  case "2:46" :
  case "2:47" :
  case "2:48" :
  case "2:49" :
    string = (quarter+","+before+","+three)
  break;
  case "2:50" :
  case "2:51" :
  case "2:52" :
  case "2:53" :
  case "2:54" :
    string = (tenmin+","+before+","+three)
  break;
  case "2:55" :
  case "2:56" :
  case "2:57" :
  case "2:58" :
  case "2:59" :
    string = (fivemin+","+before+","+three)
  break;
/* #endregion */
/* #region 3th Hour */
  case "3:0" :
  case "3:1" :
  case "3:2" :
  case "3:3" :
  case "3:4" :
    string = (three+","+oclock)
  break;
  case "3:5" :
  case "3:6" :
  case "3:7" :
  case "3:8" :
  case "3:9" :
    string = (fivemin+","+after+","+three)
  break;
  case "3:10" :
  case "3:11" :
  case "3:12" :
  case "3:13" :
  case "3:14" :
    string = (tenmin+","+after+","+three)
  break;
  case "3:15" :
  case "3:16" :
  case "3:17" :
  case "3:18" :
  case "3:19" :
    string = (quarter+","+after+","+three)
  break;
  case "3:20" :
  case "3:21" :
  case "3:22" :
  case "3:23" :
  case "3:24" :
    string = (twentymin+","+after+","+three)
  break;
  case "3:25" :
  case "3:26" :
  case "3:27" :
  case "3:28" :
  case "3:29" :
    string = (fivemin+","+before+","+half+","+four)
  break;
  case "3:30" :
  case "3:31" :
  case "3:32" :
  case "3:33" :
  case "3:34" :
    string = (half+","+four)
  break;
  case "3:35" :
  case "3:36" :
  case "3:37" :
  case "3:38" :
  case "3:39" :
    string = (fivemin+","+after+","+half+","+four)
  break;
  case "3:40" :
  case "3:41" :
  case "3:42" :
  case "3:43" :
  case "3:44" :
    string = (tenmin+","+after+","+half+","+four)
  break;
  case "3:45" :
  case "3:46" :
  case "3:47" :
  case "3:48" :
  case "3:49" :
    string = (quarter+","+before+","+four)
  break;
  case "3:50" :
  case "3:51" :
  case "3:52" :
  case "3:53" :
  case "3:54" :
    string = (tenmin+","+before+","+four)
  break;
  case "3:55" :
  case "3:56" :
  case "3:57" :
  case "3:58" :
  case "3:59" :
    string = (fivemin+","+before+","+four)
  break;
/* #endregion */
/* #region 4th Hour */
  case "4:0" :
  case "4:1" :
  case "4:2" :
  case "4:3" :
  case "4:4" :
    string = (four+","+oclock)
  break;
  case "4:5" :
  case "4:6" :
  case "4:7" :
  case "4:8" :
  case "4:9" :
    string = (fivemin+","+after+","+four)
  break;
  case "4:10" :
  case "4:11" :
  case "4:12" :
  case "4:13" :
  case "4:14" :
    string = (tenmin+","+after+","+four)
  break;
  case "4:15" :
  case "4:16" :
  case "4:17" :
  case "4:18" :
  case "4:19" :
    string = (quarter+","+after+","+four)
  break;
  case "4:20" :
  case "4:21" :
  case "4:22" :
  case "4:23" :
  case "4:24" :
    string = (twentymin+","+after+","+four)
  break;
  case "4:25" :
  case "4:26" :
  case "4:27" :
  case "4:28" :
  case "4:29" :
    string = (fivemin+","+before+","+half+","+five)
  break;
  case "4:30" :
  case "4:31" :
  case "4:32" :
  case "4:33" :
  case "4:34" :
    string = (half+","+five)
  break;
  case "4:35" :
  case "4:36" :
  case "4:37" :
  case "4:38" :
  case "4:39" :
    string = (fivemin+","+after+","+half+","+five)
  break;
  case "4:40" :
  case "4:41" :
  case "4:42" :
  case "4:43" :
  case "4:44" :
    string = (tenmin+","+after+","+half+","+five)
  break;
  case "4:45" :
  case "4:46" :
  case "4:47" :
  case "4:48" :
  case "4:49" :
    string = (quarter+","+before+","+five)
  break;
  case "4:50" :
  case "4:51" :
  case "4:52" :
  case "4:53" :
  case "4:54" :
    string = (tenmin+","+before+","+five)
  break;
  case "4:55" :
  case "4:56" :
  case "4:57" :
  case "4:58" :
  case "4:59" :
    string = (fivemin+","+before+","+five)
  break;
/* #endregion */
/* #region 5th Hour */
  case "5:0" :
  case "5:1" :
  case "5:2" :
  case "5:3" :
  case "5:4" :
    string = (five+","+oclock)
  break;
  case "5:5" :
  case "5:6" :
  case "5:7" :
  case "5:8" :
  case "5:9" :
    string = (fivemin+","+after+","+five)
  break;
  case "5:10" :
  case "5:11" :
  case "5:12" :
  case "5:13" :
  case "5:14" :
    string = (tenmin+","+after+","+five)
  break;
  case "5:15" :
  case "5:16" :
  case "5:17" :
  case "5:18" :
  case "5:19" :
    string = (quarter+","+after+","+five)
  break;
  case "5:20" :
  case "5:21" :
  case "5:22" :
  case "5:23" :
  case "5:24" :
    string = (twentymin+","+after+","+five)
  break;
  case "5:25" :
  case "5:26" :
  case "5:27" :
  case "5:28" :
  case "5:29" :
    string = (fivemin+","+before+","+half+","+six)
  break;
  case "5:30" :
  case "5:31" :
  case "5:32" :
  case "5:33" :
  case "5:34" :
    string = (half+","+six)
  break;
  case "5:35" :
  case "5:36" :
  case "5:37" :
  case "5:38" :
  case "5:39" :
    string = (fivemin+","+after+","+half+","+six)
  break;
  case "5:40" :
  case "5:41" :
  case "5:42" :
  case "5:43" :
  case "5:44" :
    string = (tenmin+","+after+","+half+","+six)
  break;
  case "5:45" :
  case "5:46" :
  case "5:47" :
  case "5:48" :
  case "5:49" :
    string = (quarter+","+before+","+six)
  break;
  case "5:50" :
  case "5:51" :
  case "5:52" :
  case "5:53" :
  case "5:54" :
    string = (tenmin+","+before+","+six)
  break;
  case "5:55" :
  case "5:56" :
  case "5:57" :
  case "5:58" :
  case "5:59" :
    string = (fivemin+","+before+","+six)
  break;
/* #endregion */
/* #region 6th Hour */
  case "6:0" :
  case "6:1" :
  case "6:2" :
  case "6:3" :
  case "6:4" :
    string = (six+","+oclock)
  break;
  case "6:5" :
  case "6:6" :
  case "6:7" :
  case "6:8" :
  case "6:9" :
    string = (fivemin+","+after+","+six)
  break;
  case "6:10" :
  case "6:11" :
  case "6:12" :
  case "6:13" :
  case "6:14" :
    string = (tenmin+","+after+","+six)
  break;
  case "6:15" :
  case "6:16" :
  case "6:17" :
  case "6:18" :
  case "6:19" :
    string = (quarter+","+after+","+six)
  break;
  case "6:20" :
  case "6:21" :
  case "6:22" :
  case "6:23" :
  case "6:24" :
    string = (twentymin+","+after+","+six)
  break;
  case "6:25" :
  case "6:26" :
  case "6:27" :
  case "6:28" :
  case "6:29" :
    string = (fivemin+","+before+","+half+","+seven)
  break;
  case "6:30" :
  case "6:31" :
  case "6:32" :
  case "6:33" :
  case "6:34" :
    string = (half+","+seven)
  break;
  case "6:35" :
  case "6:36" :
  case "6:37" :
  case "6:38" :
  case "6:39" :
    string = (fivemin+","+after+","+half+","+seven)
  break;
  case "6:40" :
  case "6:41" :
  case "6:42" :
  case "6:43" :
  case "6:44" :
    string = (tenmin+","+after+","+half+","+seven)
  break;
  case "6:45" :
  case "6:46" :
  case "6:47" :
  case "6:48" :
  case "6:49" :
    string = (quarter+","+before+","+seven)
  break;
  case "6:50" :
  case "6:51" :
  case "6:52" :
  case "6:53" :
  case "6:54" :
    string = (tenmin+","+before+","+seven)
  break;
  case "6:55" :
  case "6:56" :
  case "6:57" :
  case "6:58" :
  case "6:59" :
    string = (fivemin+","+before+","+seven)
  break;
/* #endregion */
/* #region 7th Hour */
  case "7:0" :
  case "7:1" :
  case "7:2" :
  case "7:3" :
  case "7:4" :
    string = (seven+","+oclock)
  break;
  case "7:5" :
  case "7:6" :
  case "7:7" :
  case "7:8" :
  case "7:9" :
    string = (fivemin+","+after+","+seven)
  break;
  case "7:10" :
  case "7:11" :
  case "7:12" :
  case "7:13" :
  case "7:14" :
    string = (tenmin+","+after+","+seven)
  break;
  case "7:15" :
  case "7:16" :
  case "7:17" :
  case "7:18" :
  case "7:19" :
    string = (quarter+","+after+","+seven)
  break;
  case "7:20" :
  case "7:21" :
  case "7:22" :
  case "7:23" :
  case "7:24" :
    string = (twentymin+","+after+","+seven)
  break;
  case "7:25" :
  case "7:26" :
  case "7:27" :
  case "7:28" :
  case "7:29" :
    string = (fivemin+","+before+","+half+","+eight)
  break;
  case "7:30" :
  case "7:31" :
  case "7:32" :
  case "7:33" :
  case "7:34" :
    string = (half+","+eight)
  break;
  case "7:35" :
  case "7:36" :
  case "7:37" :
  case "7:38" :
  case "7:39" :
    string = (fivemin+","+after+","+half+","+eight)
  break;
  case "7:40" :
  case "7:41" :
  case "7:42" :
  case "7:43" :
  case "7:44" :
    string = (tenmin+","+after+","+half+","+eight)
  break;
  case "7:45" :
  case "7:46" :
  case "7:47" :
  case "7:48" :
  case "7:49" :
    string = (quarter+","+before+","+eight)
  break;
  case "7:50" :
  case "7:51" :
  case "7:52" :
  case "7:53" :
  case "7:54" :
    string = (tenmin+","+before+","+eight)
  break;
  case "7:55" :
  case "7:56" :
  case "7:57" :
  case "7:58" :
  case "7:59" :
    string = (fivemin+","+before+","+eight)
  break;
/* #endregion */
/* #region 8th Hour */
  case "8:0" :
  case "8:1" :
  case "8:2" :
  case "8:3" :
  case "8:4" :
    string = (eight+","+oclock)
  break;
  case "8:5" :
  case "8:6" :
  case "8:7" :
  case "8:8" :
  case "8:9" :
    string = (fivemin+","+after+","+eight)
  break;
  case "8:10" :
  case "8:11" :
  case "8:12" :
  case "8:13" :
  case "8:14" :
    string = (tenmin+","+after+","+eight)
  break;
  case "8:15" :
  case "8:16" :
  case "8:17" :
  case "8:18" :
  case "8:19" :
    string = (quarter+","+after+","+eight)
  break;
  case "8:20" :
  case "8:21" :
  case "8:22" :
  case "8:23" :
  case "8:24" :
    string = (twentymin+","+after+","+eight)
  break;
  case "8:25" :
  case "8:26" :
  case "8:27" :
  case "8:28" :
  case "8:29" :
    string = (fivemin+","+before+","+half+","+nine)
  break;
  case "8:30" :
  case "8:31" :
  case "8:32" :
  case "8:33" :
  case "8:34" :
    string = (half+","+nine)
  break;
  case "8:35" :
  case "8:36" :
  case "8:37" :
  case "8:38" :
  case "8:39" :
    string = (fivemin+","+after+","+half+","+nine)
  break;
  case "8:40" :
  case "8:41" :
  case "8:42" :
  case "8:43" :
  case "8:44" :
    string = (tenmin+","+after+","+half+","+nine)
  break;
  case "8:45" :
  case "8:46" :
  case "8:47" :
  case "8:48" :
  case "8:49" :
    string = (quarter+","+before+","+nine)
  break;
  case "8:50" :
  case "8:51" :
  case "8:52" :
  case "8:53" :
  case "8:54" :
    string = (tenmin+","+before+","+nine)
  break;
  case "8:55" :
  case "8:56" :
  case "8:57" :
  case "8:58" :
  case "8:59" :
    string = (fivemin+","+before+","+nine)
  break;
/* #endregion */
/* #region 9th Hour */
  case "9:0" :
  case "9:1" :
  case "9:2" :
  case "9:3" :
  case "9:4" :
    string = (nine+","+oclock)
  break;
  case "9:5" :
  case "9:6" :
  case "9:7" :
  case "9:8" :
  case "9:9" :
    string = (fivemin+","+after+","+nine)
  break;
  case "9:10" :
  case "9:11" :
  case "9:12" :
  case "9:13" :
  case "9:14" :
    string = (tenmin+","+after+","+nine)
  break;
  case "9:15" :
  case "9:16" :
  case "9:17" :
  case "9:18" :
  case "9:19" :
    string = (quarter+","+after+","+nine)
  break;
  case "9:20" :
  case "9:21" :
  case "9:22" :
  case "9:23" :
  case "9:24" :
    string = (twentymin+","+after+","+nine)
  break;
  case "9:25" :
  case "9:26" :
  case "9:27" :
  case "9:28" :
  case "9:29" :
    string = (fivemin+","+before+","+half+","+ten)
  break;
  case "9:30" :
  case "9:31" :
  case "9:32" :
  case "9:33" :
  case "9:34" :
    string = (half+","+ten)
  break;
  case "9:35" :
  case "9:36" :
  case "9:37" :
  case "9:38" :
  case "9:39" :
    string = (fivemin+","+after+","+half+","+ten)
  break;
  case "9:40" :
  case "9:41" :
  case "9:42" :
  case "9:43" :
  case "9:44" :
    string = (tenmin+","+after+","+half+","+ten)
  break;
  case "9:45" :
  case "9:46" :
  case "9:47" :
  case "9:48" :
  case "9:49" :
    string = (quarter+","+before+","+ten)
  break;
  case "9:50" :
  case "9:51" :
  case "9:52" :
  case "9:53" :
  case "9:54" :
    string = (tenmin+","+before+","+ten)
  break;
  case "9:55" :
  case "9:56" :
  case "9:57" :
  case "9:58" :
  case "9:59" :
    string = (fivemin+","+before+","+ten)
  break;
/* #endregion */
/* #region 10th Hour */
  case "10:0" :
  case "10:1" :
  case "10:2" :
  case "10:3" :
  case "10:4" :
    string = (ten+","+oclock)
  break;
  case "10:5" :
  case "10:6" :
  case "10:7" :
  case "10:8" :
  case "10:9" :
    string = (fivemin+","+after+","+ten)
  break;
  case "10:10" :
  case "10:11" :
  case "10:12" :
  case "10:13" :
  case "10:14" :
    string = (tenmin+","+after+","+ten)
  break;
  case "10:15" :
  case "10:16" :
  case "10:17" :
  case "10:18" :
  case "10:19" :
    string = (quarter+","+after+","+ten)
  break;
  case "10:20" :
  case "10:21" :
  case "10:22" :
  case "10:23" :
  case "10:24" :
    string = (twentymin+","+after+","+ten)
  break;
  case "10:25" :
  case "10:26" :
  case "10:27" :
  case "10:28" :
  case "10:29" :
    string = (fivemin+","+before+","+half+","+eleven)
  break;
  case "10:30" :
  case "10:31" :
  case "10:32" :
  case "10:33" :
  case "10:34" :
    string = (half+","+eleven)
  break;
  case "10:35" :
  case "10:36" :
  case "10:37" :
  case "10:38" :
  case "10:39" :
    string = (fivemin+","+after+","+half+","+eleven)
  break;
  case "10:40" :
  case "10:41" :
  case "10:42" :
  case "10:43" :
  case "10:44" :
    string = (tenmin+","+after+","+half+","+eleven)
  break;
  case "10:45" :
  case "10:46" :
  case "10:47" :
  case "10:48" :
  case "10:49" :
    string = (quarter+","+before+","+eleven)
  break;
  case "10:50" :
  case "10:51" :
  case "10:52" :
  case "10:53" :
  case "10:54" :
    string = (tenmin+","+before+","+eleven)
  break;
  case "10:55" :
  case "10:56" :
  case "10:57" :
  case "10:58" :
  case "10:59" :
    string = (fivemin+","+before+","+eleven)
  break;
/* #endregion */
/* #region 11th Hour */
  case "11:0" :
  case "11:1" :
  case "11:2" :
  case "11:3" :
  case "11:4" :
    string = (eleven+","+oclock)
  break;
  case "11:5" :
  case "11:6" :
  case "11:7" :
  case "11:8" :
  case "11:9" :
    string = (fivemin+","+after+","+eleven)
  break;
  case "11:10" :
  case "11:11" :
  case "11:12" :
  case "11:13" :
  case "11:14" :
    string = (tenmin+","+after+","+eleven)
  break;
  case "11:15" :
  case "11:16" :
  case "11:17" :
  case "11:18" :
  case "11:19" :
    string = (quarter+","+after+","+eleven)
  break;
  case "11:20" :
  case "11:21" :
  case "11:22" :
  case "11:23" :
  case "11:24" :
    string = (twentymin+","+after+","+eleven)
  break;
  case "11:25" :
  case "11:26" :
  case "11:27" :
  case "11:28" :
  case "11:29" :
    string = (fivemin+","+before+","+half+","+twelve)
  break;
  case "11:30" :
  case "11:31" :
  case "11:32" :
  case "11:33" :
  case "11:34" :
    string = (half+","+twelve)
  break;
  case "11:35" :
  case "11:36" :
  case "11:37" :
  case "11:38" :
  case "11:39" :
    string = (fivemin+","+after+","+half+","+twelve)
  break;
  case "11:40" :
  case "11:41" :
  case "11:42" :
  case "11:43" :
  case "11:44" :
    string = (tenmin+","+after+","+half+","+twelve)
  break;
  case "11:45" :
  case "11:46" :
  case "11:47" :
  case "11:48" :
  case "11:49" :
    string = (quarter+","+before+","+twelve)
  break;
  case "11:50" :
  case "11:51" :
  case "11:52" :
  case "11:53" :
  case "11:54" :
    string = (tenmin+","+before+","+twelve)
  break;
  case "11:55" :
  case "11:56" :
  case "11:57" :
  case "11:58" :
  case "11:59" :
    string = (fivemin+","+before+","+twelve)
  break;
/* #endregion */
/* #region 12th Hour */
  case "12:0" :
  case "12:1" :
  case "12:2" :
  case "12:3" :
  case "12:4" :
    string = (twelve+","+oclock)
  break;
  case "12:5" :
  case "12:6" :
  case "12:7" :
  case "12:8" :
  case "12:9" :
    string = (fivemin+","+after+","+twelve)
  break;
  case "12:10" :
  case "12:11" :
  case "12:12" :
  case "12:13" :
  case "12:14" :
    string = (tenmin+","+after+","+twelve)
  break;
  case "12:15" :
  case "12:16" :
  case "12:17" :
  case "12:18" :
  case "12:19" :
    string = (quarter+","+after+","+twelve)
  break;
  case "12:20" :
  case "12:21" :
  case "12:22" :
  case "12:23" :
  case "12:24" :
    string = (twentymin+","+after+","+twelve)
  break;
  case "12:25" :
  case "12:26" :
  case "12:27" :
  case "12:28" :
  case "12:29" :
    string = (fivemin+","+before+","+half+","+one)
  break;
  case "12:30" :
  case "12:31" :
  case "12:32" :
  case "12:33" :
  case "12:34" :
    string = (half+","+one)
  break;
  case "12:35" :
  case "12:36" :
  case "12:37" :
  case "12:38" :
  case "12:39" :
    string = (fivemin+","+after+","+half+","+one)
  break;
  case "12:40" :
  case "12:41" :
  case "12:42" :
  case "12:43" :
  case "12:44" :
    string = (tenmin+","+after+","+half+","+one)
  break;
  case "12:45" :
  case "12:46" :
  case "12:47" :
  case "12:48" :
  case "12:49" :
    string = (quarter+","+before+","+one)
  break;
  case "12:50" :
  case "12:51" :
  case "12:52" :
  case "12:53" :
  case "12:54" :
    string = (tenmin+","+before+","+one)
  break;
  case "12:55" :
  case "12:56" :
  case "12:57" :
  case "12:58" :
  case "12:59" :
    string = (fivemin+","+before+","+one)
  break;
/* #endregion */
/* #region 13th Hour */
  case "13:0" :
  case "13:1" :
  case "13:2" :
  case "13:3" :
  case "13:4" :
    string = (one+","+oclock)
  break;
  case "13:5" :
  case "13:6" :
  case "13:7" :
  case "13:8" :
  case "13:9" :
    string = (fivemin+","+after+","+one)
  break;
  case "13:10" :
  case "13:11" :
  case "13:12" :
  case "13:13" :
  case "13:14" :
    string = (tenmin+","+after+","+one)
  break;
  case "13:15" :
  case "13:16" :
  case "13:17" :
  case "13:18" :
  case "13:19" :
    string = (quarter+","+after+","+one)
  break;
  case "13:20" :
  case "13:21" :
  case "13:22" :
  case "13:23" :
  case "13:24" :
    string = (twentymin+","+after+","+one)
  break;
  case "13:25" :
  case "13:26" :
  case "13:27" :
  case "13:28" :
  case "13:29" :
    string = (fivemin+","+before+","+half+","+two)
  break;
  case "13:30" :
  case "13:31" :
  case "13:32" :
  case "13:33" :
  case "13:34" :
    string = (half+","+two)
  break;
  case "13:35" :
  case "13:36" :
  case "13:37" :
  case "13:38" :
  case "13:39" :
    string = (fivemin+","+after+","+half+","+two)
  break;
  case "13:40" :
  case "13:41" :
  case "13:42" :
  case "13:43" :
  case "13:44" :
    string = (tenmin+","+after+","+half+","+two)
  break;
  case "13:45" :
  case "13:46" :
  case "13:47" :
  case "13:48" :
  case "13:49" :
    string = (quarter+","+before+","+two)
  break;
  case "13:50" :
  case "13:51" :
  case "13:52" :
  case "13:53" :
  case "13:54" :
    string = (tenmin+","+before+","+two)
  break;
  case "13:55" :
  case "13:56" :
  case "13:57" :
  case "13:58" :
  case "13:59" :
    string = (fivemin+","+before+","+two)
  break;
/* #endregion */
/* #region 14th Hour */
  case "14:0" :
  case "14:1" :
  case "14:2" :
  case "14:3" :
  case "14:4" :
    string = (two+","+oclock)
  break;
  case "14:5" :
  case "14:6" :
  case "14:7" :
  case "14:8" :
  case "14:9" :
    string = (fivemin+","+after+","+two)
  break;
  case "14:10" :
  case "14:11" :
  case "14:12" :
  case "14:13" :
  case "14:14" :
    string = (tenmin+","+after+","+two)
  break;
  case "14:15" :
  case "14:16" :
  case "14:17" :
  case "14:18" :
  case "14:19" :
    string = (quarter+","+after+","+two)
  break;
  case "14:20" :
  case "14:21" :
  case "14:22" :
  case "14:23" :
  case "14:24" :
    string = (twentymin+","+after+","+two)
  break;
  case "14:25" :
  case "14:26" :
  case "14:27" :
  case "14:28" :
  case "14:29" :
    string = (fivemin+","+before+","+half+","+three)
  break;
  case "14:30" :
  case "14:31" :
  case "14:32" :
  case "14:33" :
  case "14:34" :
    string = (half+","+three)
  break;
  case "14:35" :
  case "14:36" :
  case "14:37" :
  case "14:38" :
  case "14:39" :
    string = (fivemin+","+after+","+half+","+three)
  break;
  case "14:40" :
  case "14:41" :
  case "14:42" :
  case "14:43" :
  case "14:44" :
    string = (tenmin+","+after+","+half+","+three)
  break;
  case "14:45" :
  case "14:46" :
  case "14:47" :
  case "14:48" :
  case "14:49" :
    string = (quarter+","+before+","+three)
  break;
  case "14:50" :
  case "14:51" :
  case "14:52" :
  case "14:53" :
  case "14:54" :
    string = (tenmin+","+before+","+three)
  break;
  case "14:55" :
  case "14:56" :
  case "14:57" :
  case "14:58" :
  case "14:59" :
    string = (fivemin+","+before+","+three)
  break;
/* #endregion */
/* #region 15th Hour */
  case "15:0" :
  case "15:1" :
  case "15:2" :
  case "15:3" :
  case "15:4" :
    string = (three+","+oclock)
  break;
  case "15:5" :
  case "15:6" :
  case "15:7" :
  case "15:8" :
  case "15:9" :
    string = (fivemin+","+after+","+three)
  break;
  case "15:10" :
  case "15:11" :
  case "15:12" :
  case "15:13" :
  case "15:14" :
    string = (tenmin+","+after+","+three)
  break;
  case "15:15" :
  case "15:16" :
  case "15:17" :
  case "15:18" :
  case "15:19" :
    string = (quarter+","+after+","+three)
  break;
  case "15:20" :
  case "15:21" :
  case "15:22" :
  case "15:23" :
  case "15:24" :
    string = (twentymin+","+after+","+three)
  break;
  case "15:25" :
  case "15:26" :
  case "15:27" :
  case "15:28" :
  case "15:29" :
    string = (fivemin+","+before+","+half+","+four)
  break;
  case "15:30" :
  case "15:31" :
  case "15:32" :
  case "15:33" :
  case "15:34" :
    string = (half+","+four)
  break;
  case "15:35" :
  case "15:36" :
  case "15:37" :
  case "15:38" :
  case "15:39" :
    string = (fivemin+","+after+","+half+","+four)
  break;
  case "15:40" :
  case "15:41" :
  case "15:42" :
  case "15:43" :
  case "15:44" :
    string = (tenmin+","+after+","+half+","+four)
  break;
  case "15:45" :
  case "15:46" :
  case "15:47" :
  case "15:48" :
  case "15:49" :
    string = (quarter+","+before+","+four)
  break;
  case "15:50" :
  case "15:51" :
  case "15:52" :
  case "15:53" :
  case "15:54" :
    string = (tenmin+","+before+","+four)
  break;
  case "15:55" :
  case "15:56" :
  case "15:57" :
  case "15:58" :
  case "15:59" :
    string = (fivemin+","+before+","+four)
  break;
/* #endregion */
/* #region 16th Hour */
  case "16:0" :
  case "16:1" :
  case "16:2" :
  case "16:3" :
  case "16:4" :
    string = (four+","+oclock)
  break;
  case "16:5" :
  case "16:6" :
  case "16:7" :
  case "16:8" :
  case "16:9" :
    string = (fivemin+","+after+","+four)
  break;
  case "16:10" :
  case "16:11" :
  case "16:12" :
  case "16:13" :
  case "16:14" :
    string = (tenmin+","+after+","+four)
  break;
  case "16:15" :
  case "16:16" :
  case "16:17" :
  case "16:18" :
  case "16:19" :
    string = (quarter+","+after+","+four)
  break;
  case "16:20" :
  case "16:21" :
  case "16:22" :
  case "16:23" :
  case "16:24" :
    string = (twentymin+","+after+","+four)
  break;
  case "16:25" :
  case "16:26" :
  case "16:27" :
  case "16:28" :
  case "16:29" :
    string = (fivemin+","+before+","+half+","+five)
  break;
  case "16:30" :
  case "16:31" :
  case "16:32" :
  case "16:33" :
  case "16:34" :
    string = (half+","+five)
  break;
  case "16:35" :
  case "16:36" :
  case "16:37" :
  case "16:38" :
  case "16:39" :
    string = (fivemin+","+after+","+half+","+five)
  break;
  case "16:40" :
  case "16:41" :
  case "16:42" :
  case "16:43" :
  case "16:44" :
    string = (tenmin+","+after+","+half+","+five)
  break;
  case "16:45" :
  case "16:46" :
  case "16:47" :
  case "16:48" :
  case "16:49" :
    string = (quarter+","+before+","+five)
  break;
  case "16:50" :
  case "16:51" :
  case "16:52" :
  case "16:53" :
  case "16:54" :
    string = (tenmin+","+before+","+five)
  break;
  case "16:55" :
  case "16:56" :
  case "16:57" :
  case "16:58" :
  case "16:59" :
    string = (fivemin+","+before+","+five)
  break;
/* #endregion */
/* #region 17th Hour */
  case "17:0" :
  case "17:1" :
  case "17:2" :
  case "17:3" :
  case "17:4" :
    string = (five+","+oclock)
  break;
  case "17:5" :
  case "17:6" :
  case "17:7" :
  case "17:8" :
  case "17:9" :
    string = (fivemin+","+after+","+five)
  break;
  case "17:10" :
  case "17:11" :
  case "17:12" :
  case "17:13" :
  case "17:14" :
    string = (tenmin+","+after+","+five)
  break;
  case "17:15" :
  case "17:16" :
  case "17:17" :
  case "17:18" :
  case "17:19" :
    string = (quarter+","+after+","+five)
  break;
  case "17:20" :
  case "17:21" :
  case "17:22" :
  case "17:23" :
  case "17:24" :
    string = (twentymin+","+after+","+five)
  break;
  case "17:25" :
  case "17:26" :
  case "17:27" :
  case "17:28" :
  case "17:29" :
    string = (fivemin+","+before+","+half+","+six)
  break;
  case "17:30" :
  case "17:31" :
  case "17:32" :
  case "17:33" :
  case "17:34" :
    string = (half+","+six)
  break;
  case "17:35" :
  case "17:36" :
  case "17:37" :
  case "17:38" :
  case "17:39" :
    string = (fivemin+","+after+","+half+","+six)
  break;
  case "17:40" :
  case "17:41" :
  case "17:42" :
  case "17:43" :
  case "17:44" :
    string = (tenmin+","+after+","+half+","+six)
  break;
  case "17:45" :
  case "17:46" :
  case "17:47" :
  case "17:48" :
  case "17:49" :
    string = (quarter+","+before+","+six)
  break;
  case "17:50" :
  case "17:51" :
  case "17:52" :
  case "17:53" :
  case "17:54" :
    string = (tenmin+","+before+","+six)
  break;
  case "17:55" :
  case "17:56" :
  case "17:57" :
  case "17:58" :
  case "17:59" :
    string = (fivemin+","+before+","+six)
  break;
/* #endregion */
/* #region 18th Hour */
  case "18:0" :
  case "18:1" :
  case "18:2" :
  case "18:3" :
  case "18:4" :
    string = (six+","+oclock)
  break;
  case "18:5" :
  case "18:6" :
  case "18:7" :
  case "18:8" :
  case "18:9" :
    string = (fivemin+","+after+","+six)
  break;
  case "18:10" :
  case "18:11" :
  case "18:12" :
  case "18:13" :
  case "18:14" :
    string = (tenmin+","+after+","+six)
  break;
  case "18:15" :
  case "18:16" :
  case "18:17" :
  case "18:18" :
  case "18:19" :
    string = (quarter+","+after+","+six)
  break;
  case "18:20" :
  case "18:21" :
  case "18:22" :
  case "18:23" :
  case "18:24" :
    string = (twentymin+","+after+","+six)
  break;
  case "18:25" :
  case "18:26" :
  case "18:27" :
  case "18:28" :
  case "18:29" :
    string = (fivemin+","+before+","+half+","+seven)
  break;
  case "18:30" :
  case "18:31" :
  case "18:32" :
  case "18:33" :
  case "18:34" :
    string = (half+","+seven)
  break;
  case "18:35" :
  case "18:36" :
  case "18:37" :
  case "18:38" :
  case "18:39" :
    string = (fivemin+","+after+","+half+","+seven)
  break;
  case "18:40" :
  case "18:41" :
  case "18:42" :
  case "18:43" :
  case "18:44" :
    string = (tenmin+","+after+","+half+","+seven)
  break;
  case "18:45" :
  case "18:46" :
  case "18:47" :
  case "18:48" :
  case "18:49" :
    string = (quarter+","+before+","+seven)
  break;
  case "18:50" :
  case "18:51" :
  case "18:52" :
  case "18:53" :
  case "18:54" :
    string = (tenmin+","+before+","+seven)
  break;
  case "18:55" :
  case "18:56" :
  case "18:57" :
  case "18:58" :
  case "18:59" :
    string = (fivemin+","+before+","+seven)
  break;
/* #endregion */
/* #region 19th Hour */
  case "19:0" :
  case "19:1" :
  case "19:2" :
  case "19:3" :
  case "19:4" :
    string = (seven+","+oclock)
  break;
  case "19:5" :
  case "19:6" :
  case "19:7" :
  case "19:8" :
  case "19:9" :
    string = (fivemin+","+after+","+seven)
  break;
  case "19:10" :
  case "19:11" :
  case "19:12" :
  case "19:13" :
  case "19:14" :
    string = (tenmin+","+after+","+seven)
  break;
  case "19:15" :
  case "19:16" :
  case "19:17" :
  case "19:18" :
  case "19:19" :
    string = (quarter+","+after+","+seven)
  break;
  case "19:20" :
  case "19:21" :
  case "19:22" :
  case "19:23" :
  case "19:24" :
    string = (twentymin+","+after+","+seven)
  break;
  case "19:25" :
  case "19:26" :
  case "19:27" :
  case "19:28" :
  case "19:29" :
    string = (fivemin+","+before+","+half+","+eight)
  break;
  case "19:30" :
  case "19:31" :
  case "19:32" :
  case "19:33" :
  case "19:34" :
    string = (half+","+eight)
  break;
  case "19:35" :
  case "19:36" :
  case "19:37" :
  case "19:38" :
  case "19:39" :
    string = (fivemin+","+after+","+half+","+eight)
  break;
  case "19:40" :
  case "19:41" :
  case "19:42" :
  case "19:43" :
  case "19:44" :
    string = (tenmin+","+after+","+half+","+eight)
  break;
  case "19:45" :
  case "19:46" :
  case "19:47" :
  case "19:48" :
  case "19:49" :
    string = (quarter+","+before+","+eight)
  break;
  case "19:50" :
  case "19:51" :
  case "19:52" :
  case "19:53" :
  case "19:54" :
    string = (tenmin+","+before+","+eight)
  break;
  case "19:55" :
  case "19:56" :
  case "19:57" :
  case "19:58" :
  case "19:59" :
    string = (fivemin+","+before+","+eight)
  break;
/* #endregion */
/* #region 20th Hour */
  case "20:0" :
  case "20:1" :
  case "20:2" :
  case "20:3" :
  case "20:4" :
    string = (eight+","+oclock)
  break;
  case "20:5" :
  case "20:6" :
  case "20:7" :
  case "20:8" :
  case "20:9" :
    string = (fivemin+","+after+","+eight)
  break;
  case "20:10" :
  case "20:11" :
  case "20:12" :
  case "20:13" :
  case "20:14" :
    string = (tenmin+","+after+","+eight)
  break;
  case "20:15" :
  case "20:16" :
  case "20:17" :
  case "20:18" :
  case "20:19" :
    string = (quarter+","+after+","+eight)
  break;
  case "20:20" :
  case "20:21" :
  case "20:22" :
  case "20:23" :
  case "20:24" :
    string = (twentymin+","+after+","+eight)
  break;
  case "20:25" :
  case "20:26" :
  case "20:27" :
  case "20:28" :
  case "20:29" :
    string = (fivemin+","+before+","+half+","+nine)
  break;
  case "20:30" :
  case "20:31" :
  case "20:32" :
  case "20:33" :
  case "20:34" :
    string = (half+","+nine)
  break;
  case "20:35" :
  case "20:36" :
  case "20:37" :
  case "20:38" :
  case "20:39" :
    string = (fivemin+","+after+","+half+","+nine)
  break;
  case "20:40" :
  case "20:41" :
  case "20:42" :
  case "20:43" :
  case "20:44" :
    string = (tenmin+","+after+","+half+","+nine)
  break;
  case "20:45" :
  case "20:46" :
  case "20:47" :
  case "20:48" :
  case "20:49" :
    string = (quarter+","+before+","+nine)
  break;
  case "20:50" :
  case "20:51" :
  case "20:52" :
  case "20:53" :
  case "20:54" :
    string = (tenmin+","+before+","+nine)
  break;
  case "20:55" :
  case "20:56" :
  case "20:57" :
  case "20:58" :
  case "20:59" :
    string = (fivemin+","+before+","+nine)
  break;
/* #endregion */
/* #region 21th Hour */
  case "21:0" :
  case "21:1" :
  case "21:2" :
  case "21:3" :
  case "21:4" :
    string = (nine+","+oclock)
  break;
  case "21:5" :
  case "21:6" :
  case "21:7" :
  case "21:8" :
  case "21:9" :
    string = (fivemin+","+after+","+nine)
  break;
  case "21:10" :
  case "21:11" :
  case "21:12" :
  case "21:13" :
  case "21:14" :
    string = (tenmin+","+after+","+nine)
  break;
  case "21:15" :
  case "21:16" :
  case "21:17" :
  case "21:18" :
  case "21:19" :
    string = (quarter+","+after+","+nine)
  break;
  case "21:20" :
  case "21:21" :
  case "21:22" :
  case "21:23" :
  case "21:24" :
    string = (twentymin+","+after+","+nine)
  break;
  case "21:25" :
  case "21:26" :
  case "21:27" :
  case "21:28" :
  case "21:29" :
    string = (fivemin+","+before+","+half+","+ten)
  break;
  case "21:30" :
  case "21:31" :
  case "21:32" :
  case "21:33" :
  case "21:34" :
    string = (half+","+ten)
  break;
  case "21:35" :
  case "21:36" :
  case "21:37" :
  case "21:38" :
  case "21:39" :
    string = (fivemin+","+after+","+half+","+ten)
  break;
  case "21:40" :
  case "21:41" :
  case "21:42" :
  case "21:43" :
  case "21:44" :
    string = (tenmin+","+after+","+half+","+ten)
  break;
  case "21:45" :
  case "21:46" :
  case "21:47" :
  case "21:48" :
  case "21:49" :
    string = (quarter+","+before+","+ten)
  break;
  case "21:50" :
  case "21:51" :
  case "21:52" :
  case "21:53" :
  case "21:54" :
    string = (tenmin+","+before+","+ten)
  break;
  case "21:55" :
  case "21:56" :
  case "21:57" :
  case "21:58" :
  case "21:59" :
    string = (fivemin+","+before+","+ten)
  break;
/* #endregion */
/* #region 22th Hour */
  case "22:0" :
  case "22:1" :
  case "22:2" :
  case "22:3" :
  case "22:4" :
    string = (ten+","+oclock)
  break;
  case "22:5" :
  case "22:6" :
  case "22:7" :
  case "22:8" :
  case "22:9" :
    string = (fivemin+","+after+","+ten)
  break;
  case "22:10" :
  case "22:11" :
  case "22:12" :
  case "22:13" :
  case "22:14" :
    string = (tenmin+","+after+","+ten)
  break;
  case "22:15" :
  case "22:16" :
  case "22:17" :
  case "22:18" :
  case "22:19" :
    string = (quarter+","+after+","+ten)
  break;
  case "22:20" :
  case "22:21" :
  case "22:22" :
  case "22:23" :
  case "22:24" :
    string = (twentymin+","+after+","+ten)
  break;
  case "22:25" :
  case "22:26" :
  case "22:27" :
  case "22:28" :
  case "22:29" :
    string = (fivemin+","+before+","+half+","+eleven)
  break;
  case "22:30" :
  case "22:31" :
  case "22:32" :
  case "22:33" :
  case "22:34" :
    string = (half+","+eleven)
  break;
  case "22:35" :
  case "22:36" :
  case "22:37" :
  case "22:38" :
  case "22:39" :
    string = (fivemin+","+after+","+half+","+eleven)
  break;
  case "22:40" :
  case "22:41" :
  case "22:42" :
  case "22:43" :
  case "22:44" :
    string = (tenmin+","+after+","+half+","+eleven)
  break;
  case "22:45" :
  case "22:46" :
  case "22:47" :
  case "22:48" :
  case "22:49" :
    string = (quarter+","+before+","+eleven)
  break;
  case "22:50" :
  case "22:51" :
  case "22:52" :
  case "22:53" :
  case "22:54" :
    string = (tenmin+","+before+","+eleven)
  break;
  case "22:55" :
  case "22:56" :
  case "22:57" :
  case "22:58" :
  case "22:59" :
    string = (fivemin+","+before+","+eleven)
  break;
/* #endregion */
/* #region 23th Hour */
  case "23:0" :
  case "23:1" :
  case "23:2" :
  case "23:3" :
  case "23:4" :
    string = (eleven+","+oclock)
  break;
  case "23:5" :
  case "23:6" :
  case "23:7" :
  case "23:8" :
  case "23:9" :
    string = (fivemin+","+after+","+eleven)
  break;
  case "23:10" :
  case "23:11" :
  case "23:12" :
  case "23:13" :
  case "23:14" :
    string = (tenmin+","+after+","+eleven)
  break;
  case "23:15" :
  case "23:16" :
  case "23:17" :
  case "23:18" :
  case "23:19" :
    string = (quarter+","+after+","+eleven)
  break;
  case "23:20" :
  case "23:21" :
  case "23:22" :
  case "23:23" :
  case "23:24" :
    string = (twentymin+","+after+","+eleven)
  break;
  case "23:25" :
  case "23:26" :
  case "23:27" :
  case "23:28" :
  case "23:29" :
    string = (fivemin+","+before+","+half+","+twelve)
  break;
  case "23:30" :
  case "23:31" :
  case "23:32" :
  case "23:33" :
  case "23:34" :
    string = (half+","+twelve)
  break;
  case "23:35" :
  case "23:36" :
  case "23:37" :
  case "23:38" :
  case "23:39" :
    string = (fivemin+","+after+","+half+","+twelve)
  break;
  case "23:40" :
  case "23:41" :
  case "23:42" :
  case "23:43" :
  case "23:44" :
    string = (tenmin+","+after+","+half+","+twelve)
  break;
  case "23:45" :
  case "23:46" :
  case "23:47" :
  case "23:48" :
  case "23:49" :
    string = (quarter+","+before+","+twelve)
  break;
  case "23:50" :
  case "23:51" :
  case "23:52" :
  case "23:53" :
  case "23:54" :
    string = (tenmin+","+before+","+twelve)
  break;
  case "23:55" :
  case "23:56" :
  case "23:57" :
  case "23:58" :
  case "23:59" :
    string = (fivemin+","+before+","+twelve)
  break;
/* #endregion */
/* #region 00th Hour */
  case "0:0" :
  case "0:1" :
  case "0:2" :
  case "0:3" :
  case "0:4" :
    string = (twelve+","+oclock)
  break;
  case "0:5" :
  case "0:6" :
  case "0:7" :
  case "0:8" :
  case "0:9" :
    string = (fivemin+","+after+","+twelve)
  break;
  case "0:10" :
  case "0:11" :
  case "0:12" :
  case "0:13" :
  case "0:14" :
    string = (tenmin+","+after+","+twelve)
  break;
  case "0:15" :
  case "0:16" :
  case "0:17" :
  case "0:18" :
  case "0:19" :
    string = (quarter+","+after+","+twelve)
  break;
  case "0:20" :
  case "0:21" :
  case "0:22" :
  case "0:23" :
  case "0:24" :
    string = (twentymin+","+after+","+twelve)
  break;
  case "0:25" :
  case "0:26" :
  case "0:27" :
  case "0:28" :
  case "0:29" :
    string = (fivemin+","+before+","+half+","+one)
  break;
  case "0:30" :
  case "0:31" :
  case "0:32" :
  case "0:33" :
  case "0:34" :
    string = (half+","+one)
  break;
  case "0:35" :
  case "0:36" :
  case "0:37" :
  case "0:38" :
  case "0:39" :
    string = (fivemin+","+after+","+half+","+one)
  break;
  case "0:40" :
  case "0:41" :
  case "0:42" :
  case "0:43" :
  case "0:44" :
    string = (tenmin+","+after+","+half+","+one)
  break;
  case "0:45" :
  case "0:46" :
  case "0:47" :
  case "0:48" :
  case "0:49" :
    string = (quarter+","+before+","+one)
  break;
  case "0:50" :
  case "0:51" :
  case "0:52" :
  case "0:53" :
  case "0:54" :
    string = (tenmin+","+before+","+one)
  break;
  case "0:55" :
  case "0:56" :
  case "0:57" :
  case "0:58" :
  case "0:59" :
    string = (fivemin+","+before+","+one)
  break;
/* #endregion */
}

allwaysOn = [1,2,4,5,6]
allwaysOn.forEach(setActive);
items = string.split(',').map(Number);
items.forEach(setActive);

function setActive(item) {
  document.getElementById(item).style.color = "lightgray";
}
