import { Msg } from "@UI/js/components/Card/types";

export function handleCard(el: HTMLDivElement, msg: Msg): void {
  el.addEventListener("click", (ev) => {
    const target = ev.target as HTMLDivElement;
    target.classList.add('text-gray-200')
    if (target.tagName.toLocaleLowerCase() === "button") {
      alert(target.innerHTML);
    }
  });
}
