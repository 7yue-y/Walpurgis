document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动
    // 平滑滚动只应用于当前页面内的锚点链接
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            // 检查是否是当前页面的锚点
            if (targetId.startsWith('#') && document.querySelector(targetId)) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 对于指向其他HTML文件的链接，确保它们是正确的相对路径
    // 例如，在index.html中，指向about.html的链接应为 <a href="about.html">乐队介绍</a>
    // 在about.html中，指向index.html的链接应为 <a href="index.html#home">主页</a>
    // 这些链接将由浏览器默认处理，无需JS平滑滚动

    // 演出经历时间轴事件详情弹出（示例，可根据需求扩展为模态框或新页面）
    document.querySelectorAll('.btn-event-details').forEach(button => {
        button.addEventListener('click', function() {
            const timelineContent = this.closest('.timeline-content');
            const title = timelineContent.querySelector('h3').textContent;
            const description = timelineContent.querySelector('p').textContent;
            const imageUrl = timelineContent.querySelector('img').src;

            alert(`事件详情：\n标题: ${title}\n描述: ${description}\n图片: ${imageUrl}`);
            // 实际应用中，这里会打开一个模态框或导航到详情页
        });
    });

    // 简单的滚动动画（可选，可使用Intersection Observer API优化）
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
