import Listing from "./auctions/Listing";


// Thay đổi trong file SearchContoller.cs
// thêm Sort(x=> x.Ascending(a => a.Model)) sau make=> query.sort(x=> x.Ascending(a => a.Make))
// Thay đổi trong config.cs
// thêm AlwaysIncludeUserClaimsInIdToken = true trong new Client
export default function Home() {
  return (
    <div>
      <Listing/>
    </div>
  );
}