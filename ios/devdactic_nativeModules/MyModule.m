#import "MyModule.h"
#include <sys/sysctl.h>

@implementation MyModule

// The React Native bridge needs to know our module
RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
  return @{@"greeting": @"Welcome to the DevDactic\n React Native (iOS) Tutorial, right?!"};
}

RCT_EXPORT_METHOD(squareMe:(int)number:(RCTResponseSenderBlock)callback) {
  callback(@[[NSNull null], [NSNumber numberWithInt:(number*number)]]);
}

RCT_EXPORT_METHOD(elapsedTimeSinceBoot:(RCTResponseSenderBlock)callback) {
  struct timeval boottime;
  int mib[2] = {CTL_KERN, KERN_BOOTTIME};
  size_t size = sizeof(boottime);

  struct timeval now;
  struct timezone tz;
  gettimeofday(&now, &tz);

  long long int uptime = -1;

  if (sysctl(mib, 2, &boottime, &size, NULL, 0) != -1 && boottime.tv_sec != 0)
  {
      uptime = ((long long int)(now.tv_sec - boottime.tv_sec)) * 1000;
      uptime += (now.tv_usec - boottime.tv_usec) / 1000;
  }
  callback(@[[NSNull null], [NSNumber numberWithInt:(uptime)]]);
}

@end
