// Write and export a function named loadBalancer
// that accept two args chinaDownload (Promise) and USDownload (Promise).

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
