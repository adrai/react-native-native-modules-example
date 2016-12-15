#import "MyModule.h"

@implementation MyModule

// The React Native bridge needs to know our module
RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
  return @{@"greeting": @"Welcome to the DevDactic\n React Native (iOS) Tutorial, right?!"};
}

RCT_EXPORT_METHOD(squareMe:(int)number:(RCTResponseSenderBlock)callback) {
  callback(@[[NSNull null], [NSNumber numberWithInt:(number*number)]]);
}

@end
