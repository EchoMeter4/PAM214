from tkinter import *
from tkinter import ttk

from inicio_pam import InicioPAM


def main():
    root = Tk()
    frame = ttk.Frame(root, padding=10)
    frame.grid()
    ttk.Label(frame, text="Hello World").grid(column=0)
    menu = Menu(root)
    texto_menu = StringVar(root)
    texto_menu.set('Parcial 1')
    menubutton = ttk.Menubutton(root, text='Parcial 1')
    menubutton['menu'] = menu
    root.mainloop()

if __name__ == '__main__':
    main()