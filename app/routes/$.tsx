import { redirect } from "@remix-run/node";

// Redirect ivynium.com/x/y routes
export function loader() {
  return redirect(`/`);
}
