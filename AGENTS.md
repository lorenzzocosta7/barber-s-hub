<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the VGS public website in TanStack content routes with a shared SiteShell and reusable presentation sections; each leaf owns its metadata for distinct sharing and navigation.
- Booking CTAs use an external WhatsApp conversation with a service-specific message, not an internal booking system, so the site does not imply a confirmed appointment.
- Reference supplied media through Lovable Assets JSON pointers to keep binary downloads out of the repository.
